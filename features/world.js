require('chromedriver')

let {Builder} = require('selenium-webdriver')
let {defineSupportCode} = require('cucumber')

let customWorld = function(){
    this.driver = new Builder().forBrowser('chrome').build();
}
defineSupportCode(function({setWorldConstructor}){
    setWorldConstructor(customWorld)
})