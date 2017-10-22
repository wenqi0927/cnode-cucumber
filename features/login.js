require('chromedriver');
let { Builder } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

let { defineSupportCode } = require('cucumber');

let assert = require('assert');


defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', async function () {
        driver.get("http://192.168.238.128:3000/");
        return driver.findElement({ xpath: "/html/body/div[1]/div/div/ul/li[6]/a" }).click();
    });


    When('登录页面中不录入信息', function () {
        return driver.findElement({ id: "name" }).sendKeys()
    });
    Then('点击登录按钮，登录失败，得到错误提示信息', function () {
        return driver.findElement({ className: 'span-primary' }).click()
    })
})