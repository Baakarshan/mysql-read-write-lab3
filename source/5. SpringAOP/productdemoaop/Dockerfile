FROM swr.cn-north-4.myhuaweicloud.com/oomall-javaee/openjdk:21-alpine
WORKDIR /app
ARG JAR_FILE=target/productdemoaop-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
