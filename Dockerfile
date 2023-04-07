FROM debian:latest

EXPOSE 60606

RUN apt-get update &&\
    apt-get -y install curl wget libglib2.0-0 libnss3 libx11-6 openjdk-11-jdk &&\
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
    apt-get install -y nodejs &&\
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&\
    apt-get -y install ./google-chrome-stable_current_amd64.deb

WORKDIR /app

ADD . /app

RUN npm install -g allure-commandline

RUN npm install

ENTRYPOINT npm run test && allure generate --clean allure-results && allure open  -p 60606