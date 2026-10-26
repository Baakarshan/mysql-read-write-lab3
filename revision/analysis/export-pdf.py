from pathlib import Path
import subprocess
ROOT=Path(__file__).resolve().parents[2]
REV=ROOT/'revision';OUT=ROOT/'output/pdf';OUT.mkdir(parents=True,exist_ok=True)
TEMP=ROOT/'tmp/pdfs/sample-aligned';TEMP.mkdir(parents=True,exist_ok=True)
for name,target in [('实验三实验报告-样例排版','实验三实验报告-样例排版'),('复现说明','新版复现说明-样例排版')]:
 html=TEMP/(target+'.html')
 subprocess.run(['pandoc',str(REV/(name+'.md')),'-f','markdown','-t','html5','--standalone','--embed-resources','--resource-path='+str(REV),'--syntax-highlighting=none','--metadata=pagetitle:'+name,'--css='+str(REV/'analysis/sample-aligned.css'),'-o',str(html)],check=True)
 text=html.read_text().replace('href="复现说明.md"','href="新版复现说明-样例排版.pdf"')
 html.write_text(text)
 subprocess.run(['weasyprint',str(html),str(OUT/(target+'.pdf'))],check=True)
 print(OUT/(target+'.pdf'))
