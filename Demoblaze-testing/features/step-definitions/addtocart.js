const { Given, When, Then } = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page.js');
const HomePage = require('../pageobjects/home-page.js');
const ProductDetail = require('../pageobjects/product-detail.js');
const CartPage = require('../pageobjects/cart-page.js');


Given('I am on the front page', async () => {
    await FrontPage.open()
});

When('I try to login with correct credential', async () => {
    await FrontPage.login('rolansiagian', 'bullseye')
});

Then('I am successfully logged in with username {string}', async (username) => {
    await HomePage.verifyLoginSuccess(username)
});

// When('I add item {string} to cart', async (itemName) => {
//     await HomePage.clickProductName(itemName)
// });

// Then('I am successfully go to Product Detail of {string}', async (itemName) => {
//     await ProductDetail.verifyProductPage(itemName)
// });

// When('I click on Add to Cart button', async () => {
//     await ProductDetail.addToCart()
// });

When('I add item {string} to cart', async(itemName) => {
        await HomePage.clickProductName(itemName)
        await CartPage.clickBtnAddToCart()
        await browser.pause(2000)
        await CartPage.clickOkAlert()
        await CartPage.clickBrowserBackBtn()
        await browser.pause(2000)
});