"""Generate the eight representative JMeter dashboards locally; never sends load."""
from pathlib import Path
import os,shutil,subprocess
ROOT=Path(__file__).resolve().parents[2]
jmeter=os.environ.get('JMETER_BIN') or shutil.which('jmeter')
if not jmeter:raise SystemExit('Set JMETER_BIN to the installed JMeter executable.')
env=os.environ.copy();env.setdefault('HEAP','-Xms64m -Xmx256m -XX:MaxMetaspaceSize=128m');env.setdefault('JVM_ARGS','-Xss512k')
for kind in ['ReadProduct','WriteProduct']:
 for threads in [1,10,50,100]:
  name=f'{kind}-t{threads}-r1';out=ROOT/'revision/html'/name
  if out.exists():
   print('Retained existing dashboard:',name);continue
  cmd=[jmeter,'-g',str(ROOT/'results/measured'/f'{name}.jtl'),'-q',str(ROOT/'scripts/jmeter-user.properties'),'-j',str(ROOT/'revision/analysis'/f'{name}-generator.log'),'-o',str(out)]
  with (ROOT/'revision/analysis'/f'{name}-generator.console.txt').open('w') as f:subprocess.run(cmd,env=env,stdout=f,stderr=subprocess.STDOUT,check=True)
  print('Generated',name)
