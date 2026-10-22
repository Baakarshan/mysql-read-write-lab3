"""Adapt the course JMX files to scheduled runs and meaningful assertions."""
from pathlib import Path
import xml.etree.ElementTree as E
root=Path(__file__).resolve().parents[1]
src=root/'source/5. SpringAOP/jmeter'
out=root/'scripts/jmeter';out.mkdir(exist_ok=True)
def setp(parent,tag,name,value):
    e=parent.find(f"{tag}[@name='{name}']")
    if e is None:e=E.SubElement(parent,tag,{'name':name})
    e.text=value
for kind in ['ReadProduct','WriteProduct']:
    tree=E.parse(src/(kind+'.jmx'));doc=tree.getroot()
    # Drop GUI collectors and their paired trees; CLI writes a single JTL.
    for ht in doc.iter('hashTree'):
        children=list(ht)
        for i,el in enumerate(children):
            if el.tag in ['ResultCollector','UserParameters']:
                ht.remove(el)
                if i+1<len(children) and children[i+1].tag=='hashTree':ht.remove(children[i+1])
    for ep in doc.findall(".//elementProp[@elementType='Argument']"):
        name=ep.find("stringProp[@name='Argument.name']")
        if name is not None and name.text in ['hostname','port']:
            setp(ep,'stringProp','Argument.value','${__P(host,172.31.12.145)}' if name.text=='hostname' else '${__P(port,18080)}')
    tg=doc.find('.//ThreadGroup')
    setp(tg,'stringProp','ThreadGroup.num_threads','${__P(threads,1)}')
    setp(tg,'stringProp','ThreadGroup.ramp_time','${__P(ramp,5)}')
    setp(tg,'boolProp','ThreadGroup.scheduler','true')
    setp(tg,'stringProp','ThreadGroup.duration','${__P(duration,60)}')
    lc=tg.find("elementProp[@name='ThreadGroup.main_controller']")
    setp(lc,'stringProp','LoopController.loops','-1')
    setp(lc,'boolProp','LoopController.continue_forever','false')
    http=doc.find('.//HTTPSamplerProxy')
    setp(http,'stringProp','HTTPSampler.contentEncoding','UTF-8')
    setp(http,'stringProp','HTTPSampler.connect_timeout','5000')
    setp(http,'stringProp','HTTPSampler.response_timeout','15000')
    if kind=='ReadProduct':
        csv=doc.find('.//CSVDataSet');setp(csv,'stringProp','filename','${__P(csv,products.csv)}')
    else:
        setp(http,'stringProp','HTTPSampler.path','/shops/10/products')
        arg=http.find(".//stringProp[@name='Argument.value']")
        arg.text='{"name":"lab3-${__UUID()}","originalPrice":1000,"weight":100,"barcode":"LAB3","unit":"件","originPlace":"实验室"}'
    # Check both HTTP status and JSON business code; validate returned product ID.
    hts=doc.find('.//HTTPSamplerProxy/..')
    nodes=list(hts);sub=nodes[nodes.index(http)+1]
    for x in list(sub):sub.remove(x)
    ass=E.SubElement(sub,'JSR223Assertion',{'guiclass':'TestBeanGUI','testclass':'JSR223Assertion','testname':'Validate HTTP, errno and product ID','enabled':'true'})
    expected='200' if kind=='ReadProduct' else '201';errno='0' if kind=='ReadProduct' else '1'
    setp(ass,'stringProp','scriptLanguage','groovy');setp(ass,'stringProp','cacheKey','true')
    setp(ass,'stringProp','script',f'''def data = new groovy.json.JsonSlurper().parseText(prev.getResponseDataAsString())
if (prev.getResponseCode() != '{expected}' || data.errno != {errno} || data.data?.id == null) {{
    AssertionResult.setFailure(true)
    AssertionResult.setFailureMessage('Expected HTTP {expected}, errno {errno}, and product ID; got '+prev.getResponseCode()+' / '+data.errno)
}}''')
    E.SubElement(sub,'hashTree')
    for ep in doc.findall(".//elementProp[@elementType='Header']"):
        n=ep.find("stringProp[@name='Header.name']")
        if n is not None and n.text=='Authorization':setp(ep,'stringProp','Header.value','{"id":2,"name":"lab3-admin","departId":0,"userLevel":1}')
    E.indent(tree,space='  ');tree.write(out/(kind+'.jmx'),encoding='UTF-8',xml_declaration=True)
print('Created ReadProduct.jmx and WriteProduct.jmx')
