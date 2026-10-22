#!/usr/bin/env python3
"""Archive the three required PromQL queries over the measured run interval."""
import csv,json,urllib.request,urllib.parse,os,statistics
from pathlib import Path
ROOT=Path(os.environ.get('RUN_DIR',str(Path(__file__).resolve().parents[1]))).resolve();OUT=ROOT/'results/monitoring';OUT.mkdir(exist_ok=True)
runs=list(csv.DictReader((ROOT/'results/per-run.csv').open()))
start=min(int(r['window_start_ms']) for r in runs)/1000;end=max(int(r['window_end_ms']) for r in runs)/1000
base=os.environ.get('PROM_URL','http://127.0.0.1:19090')
queries={'threads':'spring:jvm_threads_live_threads','cpu':'node:cpu_usage_percent','memory':'node:memory_usage_percent'}
series={}
for name,query in queries.items():
 url=base+'/api/v1/query_range?'+urllib.parse.urlencode(dict(query=query,start=start,end=end,step=5))
 with urllib.request.urlopen(url,timeout=60) as r:d=json.load(r)
 if d['status']!='success' or not d['data']['result']:raise ValueError('Missing series: '+name)
 (OUT/(name+'.json')).write_text(json.dumps(d,indent=2)+'\n');series[name]=d['data']['result']
for name,endpoint in [('targets','targets'),('rules','rules')]:
 with urllib.request.urlopen(base+'/api/v1/'+endpoint,timeout=30) as r:d=json.load(r)
 (OUT/(name+'.json')).write_text(json.dumps(d,indent=2)+'\n')
stats=[]
for r in runs:
 lo=int(r['window_start_ms'])/1000;hi=int(r['window_end_ms'])/1000
 for name,items in series.items():
  for item in items:
   vals=[float(v) for t,v in item['values'] if lo<=float(t)<hi and v!='NaN']
   if not vals:continue
   role=item['metric'].get('role','app')
   stats.append(dict(name=r['name'],metric=name,role=role,instance=item['metric']['instance'],points=len(vals),mean=round(statistics.mean(vals),3),maximum=round(max(vals),3)))
with (OUT/'per-run.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=list(stats[0]));w.writeheader();w.writerows(stats)
print('Saved CPU, memory, JVM threads, targets/rules and per-run monitoring statistics.')
