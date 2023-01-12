const Page = require('./page')

class FrontPage extends Page {

    get inputUsername () {
        return $('#loginusername')
    }

    get inputPassword () {
        return $('#loginpassword')
    }
    
    get btnLogin () {
        return $("[onclick='logIn()']")
    }

    get linkTextLogin() {
        return $("[data-target='#logInModal']")
    }

    async login (username,password) {
        await this.linkTextLogin.click()
        await this.itsBtnLoginDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

    async itsBtnLoginDisplayed() {
        await (await this.btnLogin).waitForDisplayed(2000)
        return await (await this.btnLogin).isDisplayed()
    }

    async verifyLogoutSuccess() {
        await (await this.linkTextLogin).waitForDisplayed(5000)
        return await (await this.linkTextLogin).isDisplayed()
    }

    open () {
        return super.open('index.html');
    }
}

module.exports = new FrontPage()
