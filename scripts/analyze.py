#!/usr/bin/env python3
"""Derive measured JTL, per-run/group statistics, and lossless data hashes."""
import os,csv,json,gzip,math,statistics,hashlib,datetime
from pathlib import Path
ROOT=Path(os.environ.get('RUN_DIR',str(Path(__file__).resolve().parents[1]))).resolve();DATA=ROOT/'data';RESULT=ROOT/'results'
STEADY=RESULT/'measured';STEADY.mkdir(parents=True,exist_ok=True)
def percentile(values,p):
 values=sorted(values);return values[max(0,math.ceil(len(values)*p)-1)]
def writecsv(path,rows):
 if not rows:return
 with path.open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
runs=[]
for line in (DATA/'manifest.jsonl').read_text().splitlines():
 m=json.loads(line);name=m['name'];path=DATA/f'{name}.jtl'
 if not path.exists():
  with gzip.open(DATA/f'{name}.jtl.gz','rb') as src:path.write_bytes(src.read())
 with path.open() as f:
  reader=csv.DictReader(f);fields=reader.fieldnames;raw=list(reader)
 begin=min(int(r['timeStamp']) for r in raw);window_start=begin+5000;window_end=begin+65000
 rows=[r for r in raw if window_start<=int(r['timeStamp'])<window_end]
 with (STEADY/f'{name}.jtl').open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows(rows)
 values=[int(r['elapsed']) for r in rows];errors=sum(r['success']!='true' for r in rows)
 record=dict(name=name,kind=m['kind'],threads=m['threads'],repeat=m['repeat'],samples=len(rows),errors=errors,error_percent=round(100*errors/len(rows),6),throughput_rps=round(len(rows)/60,3),mean_ms=round(statistics.mean(values),3),median_ms=percentile(values,.5),p95_ms=percentile(values,.95),p99_ms=percentile(values,.99),max_ms=max(values),before=m['before'],after=m['after'],raw_samples=m['raw_samples'],window_start_ms=window_start,window_end_ms=window_end)
 runs.append(record)
summary=[]
for kind in ['ReadProduct','WriteProduct']:
 for threads in [1,10,50,100]:
  group=[r for r in runs if r['kind']==kind and r['threads']==threads]
  if not group:continue
  summary.append(dict(kind=kind,threads=threads,repeats=len(group),samples=sum(r['samples'] for r in group),errors=sum(r['errors'] for r in group),throughput_mean_rps=round(statistics.mean(r['throughput_rps'] for r in group),2),throughput_sd_rps=round(statistics.stdev(r['throughput_rps'] for r in group),2) if len(group)>1 else 0,mean_latency_ms=round(statistics.mean(r['mean_ms'] for r in group),2),p95_mean_ms=round(statistics.mean(r['p95_ms'] for r in group),2),p99_mean_ms=round(statistics.mean(r['p99_ms'] for r in group),2)))
writecsv(RESULT/'per-run.csv',runs);writecsv(RESULT/'summary.csv',summary)
(RESULT/'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
# gzip contains the exact original JTL bytes, including original line endings.
hashes=[]
for p in sorted(DATA.glob('*.jtl')):
 dest=p.with_suffix('.jtl.gz')
 if not dest.exists():
  with gzip.GzipFile(filename=str(dest),mode='wb',mtime=0) as f:f.write(p.read_bytes())
 if gzip.open(dest,'rb').read()!=p.read_bytes():raise ValueError(f'Compression mismatch: {p}')
 hashes.append(hashlib.sha256(p.read_bytes()).hexdigest()+'  '+p.name)
(DATA/'SHA256SUMS.txt').write_text('\n'.join(hashes)+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2))
