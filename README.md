# WebdriverIO [JS] - ReadyState Framework Using Cucumber

## What it offers:

    - This is a boilerplate test framework, developed using Cucumber-JS, which gives detailed
    directions on: implementating pageobjects, writing feature files elequently using Gherkin
    for an eCommerce site, running tests in a docker container and much more.

    - It aims to provide an idea on using various WebdriverIO API to mimick different user 
    interactions, and also, maintaining the data used for automated testing commonly using YAML file.

    - It generates test reports (allure), providing detailed outcomes about the test runs,
    including screenshots on failures.

    - This repository contains all you need to run tests in docker container or optionally in
    local machine.

## How to do:

    - Local:
        - Install nodejs and npm
        - Java [To run allure commandline]

    - Docker Container:
        - Docker [ Though tests run in container, you still can monitor runs as container runs
        in attached mode ]
    
    - Tree View:
        .
        ├── Dockerfile
        ├── README.md
        ├── init.sh
        ├── jsconfig.json
        ├── package-lock.json
        ├── package.json
        ├── src
        │   ├── data
        │   │   └── data.yml
        │   ├── features
        │   │   ├── account.creation.feature
        │   │   ├── search.products.feature
        │   │   └── sign.in.feature
        │   ├── glue
        │   │   ├── account.creation.js
        │   │   ├── add.to.cart.js
        │   │   ├── order.confirmation.js
        │   │   ├── reviews.payments.js
        │   │   ├── search.products.js
        │   │   ├── shipping.info.js
        │   │   └── sign.in.js
        │   ├── pages
        │   │   ├── add.to.cart.js
        │   │   ├── base.page.js
        │   │   ├── create.new.account.js
        │   │   ├── customer.login.js
        │   │   ├── home.js
        │   │   ├── order.confirmation.js
        │   │   ├── reviews.payments.js
        │   │   ├── search.results.js
        │   │   └── shipping.address.js
        │   └── utils
        │       ├── support.js
        │       └── td.js
        └── wdio.conf.js

## What to do:

    - For Mac or Linux distributions, you can run scripts using the script like this:  ./init.sh

    - In case of Windows, you shall run these commands on cmd or create a batch using these commands

        rd /s /q allure-report
        rd /s /q allure-results
        npm install .
        npm install -g allure-commandline
        npm run test
        allure generate --clean allure-results && allure open -h localhost -p 60606

    - After tests are done, allure will be launched in default browser, and for docker container, you
    can check the reports manually at http://localhost:60606

## What's next:

    - This is a standard boilplate framework and is evolving, however if you think to add any feature
    ,please do so and create a pull request to this repository.
