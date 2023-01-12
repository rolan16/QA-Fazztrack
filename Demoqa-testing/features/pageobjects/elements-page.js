const Page = require('./page')

class ElementsPage extends Page {

    get namePage() {
        // Locator "Main Header"
        return $('.main-header')
    }

    get btnButtons() {
        // Locator "Buttons"
        return $(`.show li:nth-of-type(5)`)
    }

    async clickBtnButtons() {
        await browser.pause(2000)
        await this.btnButtons.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnButtons.click()
        await browser.pause(2000)
    }

    async verifyMainHeader(namePage) {
        await browser.pause(2000)
        return await expect(await this.namePage).toHaveTextContaining(namePage)
    }

    async open(path) {
        return super.open(path)
    }

}

module.exports = new ElementsPage()