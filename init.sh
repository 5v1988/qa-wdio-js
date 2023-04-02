#!/bin/bash
### Removing previously generated allure reports
rm -rf ./allure-*

npm install .

npm run wdio
### Generate and launch reports once tests are done
allure generate --clean allure-results && allure open