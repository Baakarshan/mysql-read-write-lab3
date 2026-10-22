#!/usr/bin/env python3
import os,csv,math,statistics,json,datetime
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib import font_manager
ROOT=Path(os.environ.get('RUN_DIR',str(Path(__file__).resolve().parents[1]))).resolve()
(ROOT/'assets').mkdir(exist_ok=True)
font=next((p for p in [os.environ.get('CJK_FONT',''),'/System/Library/Fonts/STHeiti Light.ttc','/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'] if p and Path(p).is_file()),'')
if font:
 font_manager.fontManager.addfont(font);plt.rcParams['font.family']=font_manager.FontProperties(fname=font).get_name()
plt.rcParams.update({'font.size':11,'axes.spines.top':False,'axes.spines.right':False,'axes.unicode_minus':False})
rows=list(csv.DictReader((ROOT/'results/summary.csv').open()))
fig,axes=plt.subplots(1,2,figsize=(11,3.7),layout='constrained')
for kind,label,color in [('ReadProduct','查询 GET','#2563eb'),('WriteProduct','新建 POST','#ea580c')]:
 data=[r for r in rows if r['kind']==kind]
 x=[int(r['threads']) for r in data]
 if not data:continue
 axes[0].errorbar(x,[float(r['throughput_mean_rps']) for r in data],yerr=[float(r['throughput_sd_rps']) for r in data],label=label,color=color,marker='o',capsize=4)
 axes[1].plot(x,[float(r['p95_mean_ms']) for r in data],label=label,color=color,marker='o')
for ax in axes:
 ax.set_xticks([1,10,50,100]);ax.set_xlabel('并发线程数');ax.grid(axis='y',alpha=.2);ax.legend(frameon=False);ax.set_ylim(bottom=0)
axes[0].set_ylabel('吞吐量（次/秒）');axes[0].set_title('三次重复均值；误差线为样本标准差')
axes[1].set_ylabel('P95 响应时间（毫秒）');axes[1].set_title('各轮 P95 的算术平均值')
fig.savefig(ROOT/'assets/performance.png',dpi=180);plt.close(fig)
# Three required monitoring series for the entire measured experiment.
folder=ROOT/'results/monitoring'
if (folder/'cpu.json').exists():
 fig,axes=plt.subplots(3,1,figsize=(11,7),sharex=True,layout='constrained')
 roles={'app':'应用 Node2','compiler':'压测 Compiler','db':'数据库 Node1','monitor':'监控 Manager'}
 colors={'app':'#ea580c','compiler':'#2563eb','db':'#16a34a','monitor':'#8b5cf6'}
 for ax,(name,title) in zip(axes,[('threads','应用 JVM 活跃线程数'),('cpu','节点 CPU 使用率（%）'),('memory','节点内存使用率（%）')]):
  d=json.loads((folder/(name+'.json')).read_text())
  for item in d['data']['result']:
   role=item['metric'].get('role','app');vals=item['values']
   x=[datetime.datetime.fromtimestamp(float(t),datetime.timezone(datetime.timedelta(hours=8))) for t,v in vals]
   ax.plot(x,[float(v) for t,v in vals],label=roles[role],color=colors[role],linewidth=1.1)
  ax.set_ylabel(title);ax.grid(axis='y',alpha=.2);ax.legend(loc='upper left',ncol=4,fontsize=9,frameon=True,facecolor='white',framealpha=.95)
 axes[-1].xaxis.set_major_formatter(mdates.DateFormatter('%H:%M',tz=datetime.timezone(datetime.timedelta(hours=8))))
 date_label=x[0].strftime('%Y-%m-%d')
 axes[-1].set_xlabel(date_label+' 北京时间；5 秒采样，CPU 为 1 分钟速率窗口')
 fig.savefig(ROOT/'assets/monitoring.png',dpi=180);plt.close(fig)
print('Saved performance and monitoring plots (when monitoring data is present).')
