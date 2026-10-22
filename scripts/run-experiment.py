#!/usr/bin/env python3
"""Run the 24 experiments sequentially. Needs paramiko and SSH access to compiler/db."""
import os,sys,getpass,pathlib,datetime,json,csv,shlex,time,gzip
import paramiko
BASE=pathlib.Path(__file__).resolve().parents[1]
ROOT=pathlib.Path(os.environ.get('RUN_DIR',str(BASE))).resolve()
ROOT.mkdir(parents=True,exist_ok=True)
PASSWORD=os.environ.get('SSH_PASSWORD') or getpass.getpass('SSH password: ')
HOSTS={k:os.environ['SSH_'+k.upper()] for k in ['compiler','db']}
REMOTE='/opt/lab3'
RRESULT=os.environ.get('REMOTE_RESULTS',REMOTE+'/results')
OUT=ROOT/'data';OUT.mkdir(exist_ok=True)
RESULT=ROOT/'results';RESULT.mkdir(exist_ok=True)
MANIFEST=OUT/'manifest.jsonl'
def connect(role):
 c=paramiko.SSHClient();c.set_missing_host_key_policy(paramiko.AutoAddPolicy());c.connect(HOSTS[role],username='root',password=PASSWORD,timeout=20);return c
def execute(role,cmd):
 c=connect(role)
 try:
  _,o,e=c.exec_command(cmd,timeout=600)
  out=o.read().decode(errors='replace')+e.read().decode(errors='replace');code=o.channel.recv_exit_status()
  if code:raise RuntimeError(f'{role} exit {code}: {out[-3000:]}')
  return out
 finally:c.close()
def sql(query):
 c=connect('db')
 try:
  cmd="""docker exec -i $(docker ps -q --filter name=lab_mysql) sh -c 'MYSQL_PWD="$MYSQL_ROOT_PASSWORD" mysql -N -B -uroot lab3_demo'"""
  i,o,e=c.exec_command(cmd,timeout=180);i.write(query);i.channel.shutdown_write();out=o.read().decode();err=e.read().decode();rc=o.channel.recv_exit_status()
  if rc:raise RuntimeError(err)
  return out
 finally:c.close()
def reset_db():
 dump=(BASE/'source/5. SpringAOP/conf/mysql/sql/product.sql').read_text()
 sql('SET FOREIGN_KEY_CHECKS=0;\n'+dump+'\nSET FOREIGN_KEY_CHECKS=1;')
def count():return int(sql('SELECT COUNT(*) FROM goods_product;').strip())
def download(name):
 # Compress on the compiler before transfer; keep byte-identical original CSV JTL locally.
 execute('compiler',f"gzip -c {RRESULT}/{name}.jtl > {RRESULT}/{name}.jtl.gz")
 c=connect('compiler');s=c.open_sftp()
 try:
  for ext in ['jtl.gz','log','console.txt']:s.get(f'{RRESULT}/{name}.{ext}',str(OUT/f'{name}.{ext}'))
 finally:s.close();c.close()
 with gzip.open(OUT/f'{name}.jtl.gz','rb') as src, (OUT/f'{name}.jtl').open('wb') as dst:
  import shutil
  shutil.copyfileobj(src,dst)
def progress(message):
 text=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).isoformat(timespec='seconds')+' '+message
 print(text,flush=True)
 with (RESULT/'progress.log').open('a') as f:f.write(text+'\n')
 execute('compiler',f"printf '%s\\n' {shlex.quote(text)} >> {RRESULT}/progress.log")
def jmeter(kind,threads,duration,name,ramp):
 cmd=f'''set -e
export JAVA_HOME={REMOTE}/tools/jdk-21.0.2
export HEAP='-Xms64m -Xmx256m -XX:MaxMetaspaceSize=128m'
export JVM_ARGS='-Xss512k'
cd {REMOTE}/jmeter
{REMOTE}/tools/apache-jmeter-5.6.3/bin/jmeter -n -t {kind}.jmx -q user.properties -Jthreads={threads} -Jduration={duration} -Jramp={ramp} -l {RRESULT}/{name}.jtl -j {RRESULT}/{name}.log > {RRESULT}/{name}.console.txt 2>&1
'''
 exists=execute('compiler',f"if test -f {RRESULT}/{name}.console.txt; then tail -1 {RRESULT}/{name}.console.txt; fi").strip()
 if exists and exists != '... end of run':raise RuntimeError('Existing incomplete remote run: '+name+'; use a fresh REMOTE_RESULTS directory')
 if exists != '... end of run':execute('compiler',cmd)
 download(name)
 rows=list(csv.DictReader((OUT/f'{name}.jtl').open()))
 errors=sum(r['success']!='true' for r in rows)
 progress(f'{name}: samples={len(rows)}, errors={errors}')
 if not rows or errors:raise RuntimeError(f'Unexpected error in {name}; inspect original JTL before continuing')
 return rows
completed={json.loads(line)['name'] for line in MANIFEST.read_text().splitlines()} if MANIFEST.exists() else set()
# A completed name is never overwritten. Remove results only in a new experiment directory.
execute('compiler',f'mkdir -p {shlex.quote(RRESULT)}')
progress('START: sequential 1/10/50/100 threads; 3 repeats; 65s raw, discard first 5s ramp, 60s measurement')
try:
 for kind in ['ReadProduct','WriteProduct']:
  for threads in [1,10,50,100]:
   if all(f'{kind}-t{threads}-r{r}' in completed for r in [1,2,3]):continue
   if kind=='WriteProduct':reset_db()
   if not (OUT/f'warm-{kind}-{threads}.jtl').exists():
    progress(f'WARMUP {kind} threads={threads} 10 seconds')
    jmeter(kind,threads,10,f'warm-{kind}-{threads}',2)
   for repeat in [1,2,3]:
    if f'{kind}-t{threads}-r{repeat}' in completed:continue
    if kind=='WriteProduct':reset_db()
    before=count();name=f'{kind}-t{threads}-r{repeat}'
    progress(f'BEGIN {name}, database_rows={before}')
    start=datetime.datetime.now(datetime.timezone.utc).isoformat()
    rows=jmeter(kind,threads,65,name,5)
    after=count();end=datetime.datetime.now(datetime.timezone.utc).isoformat()
    record=dict(name=name,kind=kind,threads=threads,repeat=repeat,start=start,end=end,before=before,after=after,raw_samples=len(rows),raw_errors=sum(r['success']!='true' for r in rows))
    if kind=='WriteProduct' and after-before!=len(rows):raise RuntimeError('Database increment does not equal successful POST samples')
    with MANIFEST.open('a') as f:f.write(json.dumps(record)+'\n')
    progress(f'END {name}, database_rows={after}, inserted={after-before}')
 # Preserve final experiment data for inspection; original oomall_demo remains untouched.
 progress('COMPLETE: all 24 measured runs finished')
except Exception as e:
 progress('FAILED: '+str(e));raise
