# MySQL 读写性能测试（实验三）

课程小作业，使用四台 Ubuntu 临时云主机，测试课程 `productdemoaop` 的查询与新建接口。**24 轮正式测试全部完成，原始请求 3400532 次，错误数为 0。**

过程报告配有 12 张真实操作截图、部署图与两张结果图；输入输出日志、原始数据、源码和复现脚本均已保留。

1. [实验过程报告](实验三过程报告.md)：设计、实际步骤、输入输出、截图、结果解释。
2. [复现说明](复现说明.md)：重新分析原始数据、复用已部署环境、从源码重新部署。
3. `source/`：课程源码及本次配置修改，保留 GPL-3.0 许可。
4. `data/`：原始 JTL 的无损 gzip 文件、SHA-256、逐次测试清单、控制台日志。运行 `python3 scripts/restore-jtl.py` 可还原 `.jtl`。
5. `results/`：逐次统计、三次重复汇总、JMeter HTML 报告和 Prometheus 原始查询数据。

**本次测的是 Spring Data JPA。** 课程 `ProductPoMapper` 继承 `JpaRepository`，未加入 MyBatis 对照组。报告中的吞吐量指 HTTP 接口处理速率。

查看 HTML 报告：运行 `python3 -m http.server 8000`，打开 [查询报告](http://127.0.0.1:8000/results/html/read-t100-r1/index.html)或[新建报告](http://127.0.0.1:8000/results/html/write-t100-r1/index.html)。

程序与数据仓库：<https://github.com/Baakarshan/mysql-read-write-lab3>。
