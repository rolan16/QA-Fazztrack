const Page = require('./page')

class InteractionsPage extends Page {

    get btnDroppable() {
        // Locator "Droppable"
        return $(`.show.element-list li:nth-of-type(4)`)
    }
    
    get namePage() {
        // Locator "Main Header"
        return $('.main-header')
    }

    async clickBtnDroppable() {
        await browser.pause(2000)
        await this.btnDroppable.scrollIntoView({block: 'center'})
        await browser.pause(2000)
        await this.btnDroppable.click()
        await browser.pause(2000)
    }

    

}

module.exports = new InteractionsPage()