Computer Database Test Automation
====================

This project is fully integrated with [WebdriverIO](http://webdriver.io/) and supports Page Object Model Design Pattern. This repository contains automation script using the Cucumber (v6.x) BDD framework. It uses the chromedriver NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

## Features

- WebDriverIO
- Page Object Model
- Headless
- Parallel Run

## Requirements

- Node version 8 or higher
- A preconfigured Selenium Grid, preinstalled browser driver or cloud provider account

 This project works fine with both with NPM and Yarn.

# How to write a test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./src/features/*` and have the file ending `.feature`.

# How to run the test

Start the local web server:

```sh
$ npm run local-webserver
```

To run your tests just call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ npm run test
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

# Configurations

To configure your tests, checkout the [`wdio.conf.js`]

# Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

```sh
$ npx wdio wdio.conf.js --spec ./test/features/add.feature
```

# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Tag or @AnotherTag'
```

For more tag options please see the [Cucumber.js documentation](https://docs.cucumber.io/tag-expressions/)