const Page = require('./page')

class ButtonsPage extends Page {

    get btnClickMe() {
        // Locator "Click Me" Buttons
        return $(`//button[.='Click Me']`)
    }

    get btnRightClickMe() {
        // Locator "Right Click Me" Buttons
        return $(`//button[.='Right Click Me']`)
    }

    get btnDoubleClickMe() {
        // Locator "Right Click Me" Buttons
        return $(`//button[.='Double Click Me']`)
    }

    get ClickMeMessage() {
        // Locator "Click Me" Message
        return $('#dynamicClickMessage')
    }

    get RightClickMeMessage() {
        // Locator "Right Click Me" Message
        return $('#rightClickMessage')
    }

    get DoubleClickMeMessage() {
        // Locator "Double Click Me" Message
        return $('#doubleClickMessage')
    }

    async clickBtnClickMe() {
        // Aksi click button "Click Me"
        await browser.pause(2000)
        await this.btnClickMe.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnClickMe.click()
    }

    async clickBtnRightClickMe() {
        // Aksi click button "Right Click Me"
        await browser.pause(2000)
        await this.btnRightClickMe.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnRightClickMe.click({button : 'right'})
    }

    async clickBtnDoubleClickMe() {
        // Aksi click button "Double Click Me"
        await browser.pause(2000)
        await this.btnDoubleClickMe.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnDoubleClickMe.doubleClick()
    }

    async verifyClickMeButton() {
        // verifikasi "Click Me"
        return await expect(await this.ClickMeMessage.getText()).toEqual('You have done a dynamic click')
    }

    async verifyRightClickMeButton() {
        // verifikasi button "Right Click Me"
        return await expect(await this.RightClickMeMessage.getText()).toEqual('You have done a right click')
    }

    async verifyDoubleClickMeButton() {
        // verifikasi button "Double Click Me"
        return await expect(await this.DoubleClickMeMessage.getText()).toEqual('You have done a double click')
    }

}

module.exports = new ButtonsPage()