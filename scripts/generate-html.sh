#!/usr/bin/env bash
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/.." && pwd)
RUN_DIR=${RUN_DIR:-$ROOT}
JMETER_HOME=${JMETER_HOME:-/opt/lab3/tools/apache-jmeter-5.6.3}
export HEAP='-Xms64m -Xmx256m -XX:MaxMetaspaceSize=128m'
export JVM_ARGS='-Xss512k'
for item in 'ReadProduct:read-t100-r1' 'WriteProduct:write-t100-r1'; do
  KIND=${item%%:*}; FOLDER=${item#*:}
  FILE="$RUN_DIR/results/measured/$KIND-t100-r1.jtl"
  test -f "$FILE"
  "$JMETER_HOME/bin/jmeter" -g "$FILE" -q "$ROOT/scripts/jmeter-user.properties" \
    -j "$RUN_DIR/results/$FOLDER-report-generator.log" \
    -o "$RUN_DIR/results/html/$FOLDER"
done
