import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/loginPage';
import HomePage from '../pageobjects/homePage';



Given(/^I open the application$/, () => {
    console.log("on Login Page")

});

When(/^I login with <username> and <password>$/, async () => {
    await LoginPage.login(process.env.sauce_username, process.env.sauce_password)
});


Then(/^I can see the header on top of page with "([^"]*)"$/, async (header) => {
    let element = await HomePage.getPageHeader();
    console.log("Element : " + element)
    await expect(element).toHaveText(header);
});



Then(/^I can see the error "([^"]*)"$/, async (errorMessage) => {
    expect(await LoginPage.getLoginErrorMessage()).toBe(errorMessage);
});


When(/^I login with "([^"]*)" and "([^"]*)"$/, async (userName, password) => {
    await LoginPage.login(userName, password)
});
