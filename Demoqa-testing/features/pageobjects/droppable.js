const Page = require('./page')

class DroppablePage extends Page {

    get drag(){
        // Locator "Drag"
        return $('#draggable')
    }
    get drop(){
        // Locator "Drop"
        return $('#droppable')
    }

    get droppedText(){
        return $('#simpleDropContainer')
    }

    async dragingAndDrop(){
   
        await this.drag.scrollIntoView({ block: 'center', inline: 'center' })
        await this.drag.dragAndDrop(await this.drop);
        // await browser.pause(5000)
    }

    async verifyDropped(){
        // expect(await this.droppedText().getText()).toEqual("Dropped!")
        console.log(await this.drop.getCSSProperty('color'));
    }

}

module.exports = new DroppablePage()