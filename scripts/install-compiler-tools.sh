#!/usr/bin/env bash
set -euo pipefail
# Run on a fresh Ubuntu compiler. The existing machines already have these tools.
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y docker.io curl git unzip
LAB_HOME=${LAB_HOME:-/opt/lab3}
mkdir -p "$LAB_HOME/tools"
cd "$LAB_HOME/tools"
fetch() {
  local url=$1 file=$2
  if ! gzip -t "$file" 2>/dev/null; then
    curl -fL --retry 3 --connect-timeout 20 --max-time 900 -C - -o "$file" "$url"
    gzip -t "$file"
  fi
  tar -xzf "$file"
}
fetch 'https://download.java.net/java/GA/jdk21.0.2/f2283984656d49d69e91c558476027ac/13/GPL/openjdk-21.0.2_linux-x64_bin.tar.gz' jdk21.tar.gz
fetch 'https://repo.huaweicloud.com/apache/maven/maven-3/3.9.16/binaries/apache-maven-3.9.16-bin.tar.gz' maven.tar.gz
fetch 'https://repo.huaweicloud.com/apache/jmeter/binaries/apache-jmeter-5.6.3.tgz' jmeter.tgz
export JAVA_HOME="$LAB_HOME/tools/jdk-21.0.2"
export PATH="$JAVA_HOME/bin:$LAB_HOME/tools/apache-maven-3.9.16/bin:$PATH"
java -version
mvn -version
HEAP='-Xms64m -Xmx256m -XX:MaxMetaspaceSize=128m' JVM_ARGS='-Xss512k' "$LAB_HOME/tools/apache-jmeter-5.6.3/bin/jmeter" -v
