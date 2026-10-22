#!/usr/bin/env bash
set -euo pipefail
APP_PRIVATE_IP=${APP_PRIVATE_IP:-172.31.12.145}
APP_ENV=${APP_ENV:-/opt/lab3/app.env}
test -r "$APP_ENV"
# Do not replace the existing experiment container implicitly.
if docker container inspect lab3-productdemoaop >/dev/null 2>&1; then
  echo 'lab3-productdemoaop already exists. Use docker start or a different name.' >&2
  exit 1
fi
docker run -d --name lab3-productdemoaop --restart unless-stopped --memory=560m \
  --env-file "$APP_ENV" -p "$APP_PRIVATE_IP:18080:8080" \
  xmu-javaee/productdemoaop:0.0.1-SNAPSHOT
