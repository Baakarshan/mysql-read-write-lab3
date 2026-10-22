# 课程源码来源与本次修改

来源为服务器上已有的 `https://gitee.com/mingqcn/spring-fundamentals.git`，提交 `e327d76`。归档从 Git 提交生成，没有包含服务器上未提交的前次实验配置。

保留 `clonefactory`、`5. SpringAOP` 两个目录和原始许可证。实验只运行 `productdemoaop`，其持久层使用 JPA。业务 Java 代码与该提交一致。

1. `clonefactory/pom.xml` 移除无版本的 Boot 插件，固定 `maven-compiler-plugin` 为 3.15.0。解决独立模块构建时的插件解析问题。
2. 应用 `application.yaml` 改用数据库环境变量，调整为小内存配置，关闭 SQL 逐条输出，仅暴露 health、prometheus 两个 Actuator 端点。
3. `logback.xml` 简化为 INFO 控制台输出，避免压测时大量调试日志及旧日志滚动组件配置影响运行。
4. `Dockerfile` 保留课程 JDK 21 基础镜像，移除写死的数据库密码和默认命令，部署时读取独立 `app.env`。
5. 原来的 Docker Swarm 部署目录未复制；本次以独立容器名称和数据库避免替换前次实验。
6. `conf/mysql/sql/database.sql` 替换为独立实验库说明，实际用户和密码由 `scripts/init-db.py` 生成。`product.sql` 保持课程原始数据。
7. 原始 JMX 保存在本目录；参数化、去 GUI 监听器、增加业务断言后的实际计划位于仓库根目录 `scripts/jmeter/`。由 `scripts/prepare-jmeter.py` 生成。

配套课程说明中的演示账号口令属于公开示例；实际 SSH 和本次数据库口令均未写入仓库。
