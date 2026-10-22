#!/usr/bin/env bash
set -euo pipefail
if [ "$#" -ne 4 ]; then
  echo 'Usage: bash run-one.sh ReadProduct|WriteProduct threads repeat result-directory' >&2
  exit 2
fi
KIND=$1; THREADS=$2; REPEAT=$3; RESULT_DIR=$4
case "$KIND" in ReadProduct|WriteProduct) ;; *) exit 2;; esac
LAB_HOME=${LAB_HOME:-/opt/lab3}
export JAVA_HOME=${JAVA_HOME:-$LAB_HOME/tools/jdk-21.0.2}
export HEAP='-Xms64m -Xmx256m -XX:MaxMetaspaceSize=128m'
export JVM_ARGS='-Xss512k'
mkdir -p "$RESULT_DIR"
RESULT_DIR=$(cd "$RESULT_DIR" && pwd)
ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT/scripts/jmeter"
NAME="$KIND-t$THREADS-r$REPEAT"
if [ -e "$RESULT_DIR/$NAME.jtl" ]; then echo 'Result exists; choose another output folder.' >&2; exit 1; fi
"$LAB_HOME/tools/apache-jmeter-5.6.3/bin/jmeter" -n -t "$KIND.jmx" \
  -q "$ROOT/scripts/jmeter-user.properties" -Jhost="${APP_PRIVATE_IP:-172.31.12.145}" -Jport="${APP_PORT:-18080}" \
  -Jcsv="$ROOT/source/5. SpringAOP/jmeter/products.csv" \
  -Jthreads="$THREADS" -Jramp=5 -Jduration=65 \
  -l "$RESULT_DIR/$NAME.jtl" -j "$RESULT_DIR/$NAME.log"
