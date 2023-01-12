const { Given, When, Then } = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page.js');
const HomePage = require('../pageobjects/home-page.js');
const ProductDetail = require('../pageobjects/product-detail.js');


Given(/^I am on the front page$/, async () => {
    await FrontPage.open()
});

When(/^I try to login with correct credential$/, async () => {
    await FrontPage.login('rolansiagian', 'bullseye')
});

Then(/^I am successfully logged in with username "(.*)"$/, async (username) => {
    await HomePage.verifyLoginSuccess(username)
});

When(/^I add item "(.*)" to cart$/, async (itemName) => {
    await HomePage.clickProductName(itemName)
});

Then(/^I am successfully go to Product Detail of "(.*)"$/, async (itemName) => {
    await ProductDetail.verifyProductPage(itemName)
});

When(/^I click on Add to Cart button$/, async () => {
    await ProductDetail.addToCart()
});