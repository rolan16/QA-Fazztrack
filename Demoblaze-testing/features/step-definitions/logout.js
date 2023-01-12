const { Given, When, Then } = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page.js');
const HomePage = require('../pageobjects/home-page.js');



When(/^I try to logout with click the Log Out button$/, async () => {
    await HomePage.logout()
});

Then(/^I am successfully logged out!$/, async () => {
    await FrontPage.verifyLogoutSuccess()
});