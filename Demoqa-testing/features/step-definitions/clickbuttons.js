const { Given, When, Then } = require("@wdio/cucumber-framework");

const MainPage = require("../pageobjects/main-page.js");
const ElementsPage = require("../pageobjects/elements-page.js");
const ButtonsPage = require("../pageobjects/buttons-page.js");

When("I click Elements Button", async () => {
  await MainPage.clickElements();
});

When("I click Button on Navbar", async () => {
  await ElementsPage.clickBtnButtons();
});

When("I click on Click Me Button", async () => {
  await ButtonsPage.clickBtnClickMe();
});

Then("I successfully click on Click Me Button", async () => {
  await ButtonsPage.verifyClickMeButton();
});

When("I click on Right Click Me Button", async () => {
  await ButtonsPage.clickBtnRightClickMe();
});

Then("I successfully click on Right Click Me Button", async () => {
  await ButtonsPage.verifyRightClickMeButton();
});

When("I click on Double Click Me Button", async () => {
  await ButtonsPage.clickBtnDoubleClickMe();
});

Then("I successfully click on Double Click Me Button", async () => {
  await ButtonsPage.verifyDoubleClickMeButton();
});
