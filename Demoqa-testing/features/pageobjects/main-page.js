const Page = require('./page')

class MainPage extends Page {

    // getBtnNameLocator(buttonName) {
    //     //mengambil elemen button apa saja berdasarkan nama menggunakan xpath
    //     return $(`//*[text()= '${buttonName}']`) 
    // }

    get btnElements() {
        return $(`.//h5[text()="Elements"]`)
    }

    get btnInteractions() {
        return $(`.//h5[text()="Interactions"]`)
    }

    async clickElements() {
        await browser.pause(3000)
        await this.btnElements.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnElements.click()
    }

    async clickInteractions() {
        await browser.pause(3000)
        await this.btnInteractions.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnInteractions.click()
    }

    async open(path) {
        return super.open(path)
    }

}

module.exports = new MainPage()