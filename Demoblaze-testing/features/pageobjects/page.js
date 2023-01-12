module.exports = class Page {
    open (path) {
        return browser.url(`https://demoblaze.com/${path}`)
    }
}