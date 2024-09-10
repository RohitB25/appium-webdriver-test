const { Given, When, Then } = require('@wdio/cucumber-framework')
const {expect} = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const config = require('../configuration/config.json')

Given(/^I am on the login page$/, () => {
    console.log("on Login Page")
});

When(/^I login with <username> and <password>$/, async() => {
    await LoginPage.login(config.username,config.password)
});


Then(/^I can see the header on top of page with "([^"]*)"$/, async (header) => {
    let element = await HomePage.getPageHeader();
    console.log("Element : "+element)
    await expect(element).toHaveText(header);
});



Then(/^I can see the error "([^"]*)"$/, async (errorMessage) => {
    expect(await LoginPage.getLoginErrorMessage()).toBe(errorMessage);
});


When(/^I login with "([^"]*)" and "([^"]*)"$/, async (userName,password) => {
	await LoginPage.login(userName,password)
});
