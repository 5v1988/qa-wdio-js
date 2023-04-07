#!/bin/bash

## 'docker' or 'local'
environment="docker"

if [[ "$environment" == "docker" ]]; then
    docker build --tag qa-wdio-js .
    docker run -p 60606:60606 -it -v /dev/shm:/dev/shm qa-wdio-js
else
    rm -rf ./allure-*
    npm install .
    npm install -g allure-commandline
    npm run test
    allure generate --clean allure-results && allure open -h localhost -p 60606
fi
