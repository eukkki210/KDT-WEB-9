# # docker run -e MYSQL_ROOT_PASSWORD mysql
# FROM mysql

# ENV MYSQL_ROOT_PASSWORD=inter0719

# EXPOSE 3306
# 이미지의 포트를 명시
# docker build -t 이미지이름 도커파일경로
# docker buil -t mysql-self .

FROM node:18
# 작업 디렉토리를 설정
WORKDIR /app
# 소스(파일) 추가
COPY . /app
# 쉘 스크립트 (RUN: 이미지를 빌드할 때)
RUN npm install
# 포트 매핑
EXPOSE 8000

# 실행 명령문 (컨테이너를 생성, 실해할 때 사용)
# node index.js
CMD [ "node", "index.js" ]
# docker build -t node-project .

# docker run --name node-project -p 8888:8000 -d node-project