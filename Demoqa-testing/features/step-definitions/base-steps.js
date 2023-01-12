const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/main-page.js');
const ElementsPage = require('../pageobjects/elements-page.js');
const ButtonsPage = require('../pageobjects/buttons-page.js')

Given('I am on the Main Page', async () => {
    await MainPage.open(`https://demoqa.com/`)
});

Then('I successfully go to {string} Page', async(namePage) => {
    await ElementsPage.verifyMainHeader(namePage)
});