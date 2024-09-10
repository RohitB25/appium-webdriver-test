
# Assignment : Saucelab-WebdriverIO

This project is designed for automating testing of Android mobile apps using WebdriverIO.
It is a powerful and popular open-source test automation framework used for automating tests on mobile applications

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Strecture](#project-strecture)

## Installation

## Prerequisites

Before you start, make sure you have the following installed:

- Android Studio
- Latest Node.js
- JDK

To get started with the project, follow these steps:

    1. Clone the repository:
      -  git clone https://github.com/RohitB25/appium-webdriver-test.git
        
    2. Navigate to the project directory:
       -  cd yourproject
       
    3. Install the project dependencies:
      -  npm install
       

## Usage

To run the scripts, use the following commands:

- **Run WebdriverIO tests:**
    ```bash
    npm run wdio:test
    ```

- **Generate Allure report:**
    ```bash
    npm run allure:report
    ```

- **Open Allure report:**
    ```bash
    npm run allure:open
    ```
    ### Commands Overview

- `wdio:test`: Executes the WebdriverIO tests.
- `allure:report`: Generates a new Allure report from the test results.
- `allure:open`: Opens the generated Allure report in your default web browser.


## Configuration

`Wdio.conf.js` - 
The `wdio.conf.js` file is the main configuration file for WebdriverIO. It defines how WebdriverIO should run your tests, including settings for the test runner, browser capabilities, and reporting.

## Project Strecture

- **`app/`**: Contains the APK file used for testing on Sauce Labs.
- **`features/`**: Contains all the BDD-related files.
  - **`pageObject/`**: Contains Page Object Model (POM) files that represent the different pages of the app.
  - **`step-definitions/`**: Contains the step definitions that map the steps in the feature files to code.
  - **`login.feature`**: An example feature file that defines login scenarios in Gherkin syntax.
- **`wdio.conf.js`**: The WebdriverIO configuration file, which specifies how tests are run.
- **`package.json`**: Contains project metadata, scripts, and dependencies. 
    
