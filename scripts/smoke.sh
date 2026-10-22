#!/usr/bin/env bash
set -euo pipefail
APP_PRIVATE_IP=${APP_PRIVATE_IP:-172.31.12.145}
APP_PORT=${APP_PORT:-18080}
BASE="http://$APP_PRIVATE_IP:$APP_PORT"
LAB_HOME=${LAB_HOME:-/opt/lab3}
mkdir -p "$LAB_HOME"
date -Is
printf '%s\n' 'POST /shops/10/products' \
  'Authorization: {"id":2,"name":"lab3-admin","departId":10,"userLevel":1}' \
  '{"name":"lab3-final-verification","originalPrice":1000,"weight":100,"barcode":"LAB3VERIFY","unit":"件","originPlace":"实验室"}'
curl -sS -D "$LAB_HOME/final-smoke.headers" -o "$LAB_HOME/final-smoke.json" \
  -X POST "$BASE/shops/10/products" -H 'Content-Type: application/json' \
  -H 'Authorization: {"id":2,"name":"lab3-admin","departId":10,"userLevel":1}' \
  -d '{"name":"lab3-final-verification","originalPrice":1000,"weight":100,"barcode":"LAB3VERIFY","unit":"件","originPlace":"实验室"}'
cat "$LAB_HOME/final-smoke.headers"
cat "$LAB_HOME/final-smoke.json"
printf '\n'
PRODUCT_ID=$(python3 -c 'import json,sys;d=json.load(open(sys.argv[1]));assert d["errno"]==1;print(d["data"]["id"])' "$LAB_HOME/final-smoke.json")
printf 'GET /shops/10/products/%s\n' "$PRODUCT_ID"
curl -sS -i "$BASE/shops/10/products/$PRODUCT_ID"
printf '\n'
