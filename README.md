# MySQL 读写性能测试（实验三）

课程小作业，使用四台 Ubuntu 临时云主机，测试课程 `productdemoaop` 的查询与新建接口。**24 轮正式测试全部完成，原始请求 3400532 次，错误数为 0。**

新版正文集中展示读写逐级加压的 16 张曲线截图（组合为 8 幅阶段图）；原过程记录、输入输出日志、原始数据、源码和复现脚本仍保留。

1. [新版实验报告：样例排版](revision/实验三实验报告-样例排版.md)：以查询、新建两组逐级加压为重点，含八幅 JMeter 趋势/百分位阶段图。
2. [新版 PDF](output/pdf/实验三实验报告-样例排版.pdf)与[新版复现说明](revision/复现说明.md)。
3. [原版过程记录](实验三过程报告.md)与[原部署说明](复现说明.md)：保留追溯，部署状态对应 10 月 22 日，不能直接套用当前共享主机。
4. `source/` 为课程源码与配置，保留 Apache-2.0 许可；`data/` 保存原始 JTL 的无损 gzip、SHA-256、测试清单和日志。
5. `results/` 为全部 24 轮统计与监控；`revision/html/` 为读写八档第 1 轮完整 JMeter HTML，`revision/analysis/` 为重算及排版脚本。

**新版于 10 月 26 日重做分析与排版，沿用 10 月 22 日原始数据，没有重新远程压测。** 只读检查发现 Node1、Manager 已有其他课程服务，故没有启动旧 MySQL、恢复表或调整运行服务。

**本次测的是 Spring Data JPA。** 课程 `ProductPoMapper` 继承 `JpaRepository`，未加入 MyBatis 对照组。报告中的吞吐量指 HTTP 接口处理速率。

查看 HTML 报告：运行 `python3 -m http.server 8000`，打开 [查询报告](http://127.0.0.1:8000/results/html/read-t100-r1/index.html)或[新建报告](http://127.0.0.1:8000/results/html/write-t100-r1/index.html)。

程序与数据仓库：<https://github.com/Baakarshan/mysql-read-write-lab3>。
