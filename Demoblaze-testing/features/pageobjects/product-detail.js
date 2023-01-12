const Page = require('./page')

class ProductDetail extends Page {
    get productName () {
        return $('.name')
    }
    
    get btnAddToCart () {
        return $('.btn-success')
    }

    async verifyProductPage(itemName) {
        await expect(await this.productName).toHaveTextContaining(itemName)
    }

    async itsBtnAddToCartDisplayed() {
        await (await this.btnAddToCart).waitForDisplayed(2000)
        return await (await this.btnAddToCart).isDisplayed()
    }
    
    async addToCart () {
        await this.itsBtnAddToCartDisplayed()
        await this.btnAddToCart.click()
    }
}

module.exports = new ProductDetail()