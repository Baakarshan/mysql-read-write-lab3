# 原始记录说明

`ReadProduct-t{线程数}-r{轮次}` 与 `WriteProduct-t{线程数}-r{轮次}` 是正式测试，4 档线程数、每档 3 轮，共 24 轮。

每个 `.jtl.gz` 是原始 CSV JTL 的无损压缩。运行 `python3 scripts/restore-jtl.py` 解压并核对 SHA-256。原始 JTL 保存 65 秒运行记录；统计只取首条采样时间加 5 秒起的 60 秒窗口。

`warm-*` 是各档 10 秒预热，`pilot-*` 是正式实验前的 5 秒冒烟测试，均不计入正式统计。最早的单次 curl 新建返回产品 ID 5609，另有 452 次成功的 `pilot-write`，所以正式查询开始时总产品数为 3912 + 1 + 452 = 4365。正式查询始终只遍历课程 3912 组原始 ID。

`manifest.jsonl` 记录控制脚本每轮的开始、读取完结果后的结束时刻，以及数据库行数；**采样的精确时间以 JTL 的 `timeStamp` 为准**。第二轮单并发查询在结果传输切换为 gzip 后接续下载，因此控制脚本时刻晚于采样时刻，原始 JTL 未重写。

正式 POST 每轮从 3912 行恢复，并核对 `after - before == raw_samples`。JTL 的 `success` 同时包含 HTTP 状态与业务 JSON 断言结果。`before/after` 对应 65 秒原始运行，不能用剔除升压阶段后的请求数核对数据库增量。

`.log` 是 JMeter 引擎日志，`.console.txt` 是命令行汇总。数据库凭据及真实 SSH 口令未写入这些记录。
