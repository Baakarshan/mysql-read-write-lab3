#!/usr/bin/env bash
set -euo pipefail
MODE=${1:-node}
ROOT=$(cd "$(dirname "$0")/.." && pwd)
if [ "$MODE" = node ]; then
  NODE_PRIVATE_IP=${NODE_PRIVATE_IP:?Set the private IP of this node}
  docker run -d --name lab3-node-exporter --restart unless-stopped --network host --pid host \
    -v /:/host:ro,rslave \
    swr.cn-north-4.myhuaweicloud.com/oomall-javaee/prom/node-exporter@sha256:7bcf2839f207d926b908cd3c566c9f1577efb72268062be0c96cd3b17a5cb283 \
    --path.rootfs=/host --web.listen-address="$NODE_PRIVATE_IP:9100"
elif [ "$MODE" = prometheus ]; then
  MONITOR_PRIVATE_IP=${MONITOR_PRIVATE_IP:-172.31.7.102}
  mkdir -p /opt/lab3/prometheus
  cp "$ROOT/scripts/prometheus.yml" "$ROOT/scripts/recording.yml" /opt/lab3/prometheus/
  IMAGE=swr.cn-north-4.myhuaweicloud.com/oomall-javaee/prom/prometheus@sha256:6573196e5dbe834779ac4d34cb053113cc502a69e9e20ba3be96d37f33e81545
  docker run --rm --entrypoint /bin/promtool -v /opt/lab3/prometheus:/etc/prometheus:ro "$IMAGE" check config /etc/prometheus/prometheus.yml
  docker run -d --name lab3-prometheus --restart unless-stopped \
    -p "$MONITOR_PRIVATE_IP:19090:9090" -v /opt/lab3/prometheus:/etc/prometheus:ro "$IMAGE" \
    --config.file=/etc/prometheus/prometheus.yml --storage.tsdb.path=/prometheus --storage.tsdb.retention.time=2d
else exit 2; fi
