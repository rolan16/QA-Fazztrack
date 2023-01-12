const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/main-page.js');
const DroppablePage = require('../pageobjects/droppable.js')
const InteractionsPage = require('../pageobjects/interactions-page.js');


When('I click Interactions Button', async() => {
    await MainPage.clickInteractions()
});

When('I click Droppable on Navbar', async() => {
    await InteractionsPage.clickBtnDroppable()
});

When('I doing Drag and Drop', async () => {
    await DroppablePage.dragingAndDrop()
});

Then('I successfully doing Drag and Drop',async()=>{
    await DroppablePage.verifyDropped()
    await browser.pause(2000);
});