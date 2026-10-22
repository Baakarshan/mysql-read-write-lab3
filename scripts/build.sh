#!/usr/bin/env bash
set -euo pipefail
LAB_HOME=${LAB_HOME:-/opt/lab3}
export JAVA_HOME=${JAVA_HOME:-$LAB_HOME/tools/jdk-21.0.2}
export PATH="$JAVA_HOME/bin:$LAB_HOME/tools/apache-maven-3.9.16/bin:$PATH"
export MAVEN_OPTS='-Xms64m -Xmx256m -XX:MaxMetaspaceSize=160m'
ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT/source/clonefactory"
mvn -B -s "$ROOT/scripts/maven-settings.xml" install -Dmaven.test.skip=true
cd "$ROOT/source/5. SpringAOP"
mvn -B -s "$ROOT/scripts/maven-settings.xml" install -pl core -am -Dmaven.test.skip=true
mvn -B -s "$ROOT/scripts/maven-settings.xml" clean pre-integration-test -pl productdemoaop -Dmaven.test.skip=true
docker image inspect xmu-javaee/productdemoaop:0.0.1-SNAPSHOT --format '{{.Id}}'
