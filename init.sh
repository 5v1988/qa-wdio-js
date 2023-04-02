#!/bin/bash
### Removing previously generated allure reports
rm -rf ./allure-*
npm install .
npm run test
### Generate and launch reports once tests are done
allure generate --clean allure-results && allure open