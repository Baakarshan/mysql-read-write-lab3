"""Recompute load-response profiles from original 2026-10-22 evidence; no remote operations."""
import csv,gzip,json,math,statistics
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
profiles=[]
for line in (ROOT/'data/manifest.jsonl').read_text().splitlines():
 m=json.loads(line)
 with gzip.open(ROOT/'data'/f'{m["name"]}.jtl.gz','rt') as f:raw=list(csv.DictReader(f))
 start=min(int(r['timeStamp']) for r in raw)+5000
 rows=[r for r in raw if start<=int(r['timeStamp'])<start+60000]
 values=sorted(int(r['elapsed']) for r in rows)
 pct=lambda p:values[max(0,math.ceil(len(values)*p/100)-1)]
 seconds=[]
 buckets=[[] for _ in range(60)]
 for r in rows:buckets[(int(r['timeStamp'])-start)//1000].append(int(r['elapsed']))
 for sec,vals in enumerate(buckets):
  seconds.append({'second':sec,'samples':len(vals),'mean_ms':round(statistics.mean(vals),3) if vals else None})
 profiles.append({'name':m['name'],'kind':m['kind'],'threads':m['threads'],'repeat':m['repeat'],'samples':len(rows),'errors':sum(r['success']!='true' for r in rows),'active_threads_min':min(int(r['allThreads']) for r in rows),'active_threads_max':max(int(r['allThreads']) for r in rows),'full_threads_sample_percent':round(100*sum(int(r['allThreads'])==m['threads'] for r in rows)/len(rows),3),'mean_ms':round(statistics.mean(values),3),'p80_ms':pct(80),'p95_ms':pct(95),'p99_ms':pct(99),'le40_percent':round(100*sum(v<=40 for v in values)/len(values),3),'percentiles':[{'percentile':p,'elapsed_ms':pct(p)} for p in range(1,101)],'seconds':seconds})
(OUT/'existing-load-profiles.json').write_text(json.dumps(profiles,ensure_ascii=False,indent=2)+'\n')
for kind in ['ReadProduct','WriteProduct']:
 for t in [1,10,50,100]:
  g=[p for p in profiles if p['kind']==kind and p['threads']==t]
  print(kind,t,'P80',round(statistics.mean(p['p80_ms'] for p in g),2),'<=40ms',round(statistics.mean(p['le40_percent'] for p in g),2),'%')
