const Page = require('./page')

class HomePage extends Page {
    get accountName () {
        return $('#nameofuser')
    }

    get btnLogout () {
        return $("//a[.='Log out']")
    }

    getProductNameLocator(itemName) {
        return $(`//a[text()[contains(.,'${itemName}')]]`) // mengambil elemen nama item dengan menggunakan xpath
    }

    async clickProductName(itemName) {
        await this.getProductNameLocator(itemName).click()
    }
    
    async verifyLoginSuccess(username) {
        return await expect(await this.accountName).toHaveTextContaining(username)
    }

    async logout () {
        await this.itsBtnLogoutDisplayed()
        await this.btnLogout.click()
    }

    async itsBtnLogoutDisplayed() {
        await (await this.btnLogout).waitForDisplayed(3000)
        return await (await this.btnLogout).isDisplayed()
    }

    async clickItem() {
        await this.nokiaLumia.click()
    }
}

module.exports = new HomePage()