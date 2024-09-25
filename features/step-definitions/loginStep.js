import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/loginPage';
import HomePage from '../pageobjects/homePage';
let homePageProduct;



Given(/^I open the application$/, () => {
    console.log("on Login Page")

});

When(/^I login with <username> and <password>$/, async () => {
    console.log("set username and password")
    await LoginPage.login(process.env.sauce_username, process.env.sauce_password)
});


Then(/^I can see the header on top of page with "([^"]*)"$/, async (header) => {
    console.log("validating header of the page ...")
    let text = await HomePage.getPageHeader();
    await expect(text).toBe(header);
});



Then(/^I can see the error "([^"]*)"$/, async (errorMessage) => {
    console.log("validating error message for invalide input...")
    expect(await LoginPage.getLoginErrorMessage()).toBe(errorMessage);
});


When(/^I login with "([^"]*)" and "([^"]*)"$/, async (userName, password) => {
    console.log("set value username and password")
    await LoginPage.login(userName, password)
});

Then(/^I select addToCart for second product on the page$/, async () => {
    await HomePage.clickAddToCartForSecondProduct()
    homePageProduct = await HomePage.fetchHomePageProduct()
    console.log("homePageProduct : " + homePageProduct)
});

Then(/^I click on cartIcon$/, async () => {
    await HomePage.clickCartIcon();
});

Then(/^I can see the prodcut name on the cartPage$/, async () => {
    let checkoutPageProduct = await HomePage.fetchCheckoutPageProduct()
    console.log("checkoutPageProduct :" + checkoutPageProduct)
    expect(homePageProduct).toBe(checkoutPageProduct)
});
