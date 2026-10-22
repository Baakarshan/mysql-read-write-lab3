#!/usr/bin/env python3
"""Create only lab3_demo, import the course SQL, and install a private app.env on Node2.
Refuses to overwrite an existing lab3_demo database.
"""
import os,getpass,secrets,pathlib,paramiko
ROOT=pathlib.Path(__file__).resolve().parents[1]
ssh_password=os.environ.get('SSH_PASSWORD') or getpass.getpass('SSH password: ')
app_ip=os.environ.get('APP_PRIVATE_IP','172.31.12.145');db_ip=os.environ.get('DB_PRIVATE_IP','172.31.12.231')
def connect(role):
 c=paramiko.SSHClient();c.set_missing_host_key_policy(paramiko.AutoAddPolicy());c.connect(os.environ['SSH_'+role],username='root',password=ssh_password,timeout=20);return c
c=connect('DB')
cmd="""docker exec -i $(docker ps -q --filter name=lab_mysql) sh -c 'MYSQL_PWD="$MYSQL_ROOT_PASSWORD" mysql -uroot'"""
i,o,e=c.exec_command(cmd)
pw=secrets.token_urlsafe(24)
# CREATE DATABASE has no IF NOT EXISTS; an existing experiment is not overwritten.
query="CREATE DATABASE lab3_demo;\n"
query+="CREATE USER 'lab3user'@'"+app_ip+"' IDENTIFIED BY '"+pw+"';\nGRANT ALL ON lab3_demo.* TO 'lab3user'@'"+app_ip+"';\n"
query+="CREATE USER 'lab3user'@'10.0.0.%' IDENTIFIED BY '"+pw+"';\nGRANT ALL ON lab3_demo.* TO 'lab3user'@'10.0.0.%';\n"
query+='USE lab3_demo; SET FOREIGN_KEY_CHECKS=0;\n'+(ROOT/'source/5. SpringAOP/conf/mysql/sql/product.sql').read_text()+'\nSET FOREIGN_KEY_CHECKS=1; SELECT COUNT(*) AS initial_products FROM goods_product;'
i.write(query);i.channel.shutdown_write();out=o.read().decode();err=e.read().decode();rc=o.channel.recv_exit_status();c.close()
if rc:raise SystemExit('Initialization stopped. Existing database is retained. MySQL: '+err)
print(out)
c=connect('APP');_,o,e=c.exec_command('mkdir -p /opt/lab3');o.channel.recv_exit_status();s=c.open_sftp()
with s.open('/opt/lab3/app.env','w') as f:
 f.write(f'DB_URL=jdbc:mysql://{db_ip}:3306/lab3_demo?serverTimezone=Asia/Shanghai\nDB_USER=lab3user\nDB_PASSWORD={pw}\nJAVA_TOOL_OPTIONS=-Xms64m -Xmx256m -Xss512k -XX:MaxMetaspaceSize=160m -XX:ReservedCodeCacheSize=64m\n')
s.chmod('/opt/lab3/app.env',0o600);s.close();c.close()
print('Created lab3_demo. Application credential saved to Node2:/opt/lab3/app.env (0600); not printed.')
