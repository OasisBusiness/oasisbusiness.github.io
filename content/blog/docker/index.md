---
title: "Docker"
date: "2021-10-12T07:26:03.284Z"
description: "Our own AI Model, made with machine learning"
categories: [code]
comments: true
---


###Docker

[https://www.docker.com/](https://www.docker.com/)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/521f8b5f-e303-490f-85f1-f4bed5dc47fa/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f78cd40a-6955-408a-bc7c-b38a862db47b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77a5b435-6dc0-48bf-b7bb-eef14d6554f3/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f14953af-f9f3-4d48-aec6-dce7adf1ed93/Untitled.png)

1. docker 명령어

docker ps

docker build

docker run

[https://luvstudy.tistory.com/106](https://luvstudy.tistory.com/106)

1. docker port

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ec39cf9-0d52-4124-97c3-d01f2f97e5c4/Untitled.png)

1. dockerfile

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed1c75eb-bc40-4b4a-87ba-11623cb12906/Untitled.png)

[https://luvstudy.tistory.com/106](https://luvstudy.tistory.com/106)

```
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} demo-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/demo-0.0.1-SNAPSHOT.jar"]
```

1. docker-compose

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ea2a6de7-915d-4abd-b239-80f43248ba83/Untitled.png)

[https://docs.microsoft.com/ko-kr/visualstudio/docker/tutorials/use-docker-compose](https://docs.microsoft.com/ko-kr/visualstudio/docker/tutorials/use-docker-compose)

1. docker pull

local

```python
docker build -t joohyung1002/demo-joo .
```

```python
docker push joohyung1002/demo-joo
```

```python
sudo yum install docker
sudo systemctl start docker
```

```python
sudo docker pull joohyung1002/demo-joo
```

```python
sudo docker run -p 9000:8080 joohyung1002/demo-joo
```
        - 업종 별 전년대비 개수