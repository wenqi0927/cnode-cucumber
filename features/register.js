let {defineSupportCode } = require("cucumber")
let assert = require("assert")

defineSupportCode(function({Given,When,Then}){
    Given('进入注册页面',async function () {
       await this.driver.get("http://192.168.238.128:3000/");
        return this.driver.findElement({css:"body > div.navbar > div > div > ul > li:nth-child(5) > a"}).click() 
      });
      When('用户名输入{string},密码输入{string},重复密码输入{string},邮箱输入{string}', function (string, string2, string3, string4) {
        this.driver.findElement({id:"loginname"}).sendKeys(string)
        this.driver.findElement({id:"pass"}).sendKeys(string2)
        this.driver.findElement({id:"re_pass"}).sendKeys(string3)
        return this.driver.findElement({id:"email"}).sendKeys(string4)
      });
      Then('点击注册，应该收到{string}',async function (string) {
        await this.driver.findElement({className:"span-primary"}).click()
        let errtip =await this.driver.findElement({className:"alert alert-error"}).getText()
        return assert.deepEqual(errtip,string)
      });

})


 
