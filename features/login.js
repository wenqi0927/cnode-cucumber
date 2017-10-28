
let { defineSupportCode } = require('cucumber');
let assert = require('assert');


defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到登录页面', async function () {
        this.driver.get("http://192.168.238.128:3000/");
        return this.driver.findElement({ css: "body > div.navbar > div > div > ul > li:nth-child(6) > a" }).click();
    });
    //http://118.31.19.120:3000

//     When('登录页面中不录入信息', function () {
//         return driver.findElement({ id: "name" }).sendKeys()
//     });
//     Then('点击登录按钮，登录失败，得到错误提示信息', function () {
//         return driver.findElement({ className: 'span-primary' }).click()
//     })
// })


  // When('登录页面中不录入信息', function() {
  //   this.driver.findElement({id: "name" }).sendKeys()
  //   return this.driver.findElement({id:"pass"}).sendKeys()
  // });

  // Then('点击登录按钮，注册失败,得到错误提示信息。',async function() {
  //   await this.driver.findElement({ className: 'span-primary' }).click()
  //   let errtip = await this.driver.findElement({ css: "#content > div > div.inner > div" }).getText(); 
  //   return assert.deepEqual("信息不完整。", errtip);
  // });
  
  // When('登录页面中不录入信息', async function() {
  //   await this.driver.findElement({id: "name" }).sendKeys("wenqi")
  //   return this.driver.findElement({id:"pass"}).sendKeys()
  // });

  // Then('点击登录按钮，注册失败,得到错误提示信息。',async function() {
  //   this.driver.findElement({ className: 'span-primary' }).click()
  //   let errtip = await this.driver.findElement({ css: "#content > div > div.inner > div" }).getText(); 
  //   return assert.deepEqual("信息不完整。", errtip);
  // });

  // When('登录页面中不录入信息', function() {
  //   this.driver.findElement({id: "name" }).sendKeys("")
  //   return this.driver.findElement({id:"pass"}).sendKeys("123456")
  // });

  // Then('点击登录按钮，注册失败,得到错误提示信息。',async function() {
  //   this.driver.findElement({ className: 'span-primary' }).click()
  //   let errtip = await this.driver.findElement({ css: "#content > div > div.inner > div" }).getText(); 
  //   return assert.deepEqual("信息不完整。", errtip);
  // });

  // When('登录页面中不录入信息', function() {
  //   this.driver.findElement({id: "name" }).sendKeys("wenqi")
  //   return this.driver.findElement({id:"pass"}).sendKeys("123456")
  // });

  // Then('点击登录按钮，注册失败,得到错误提示信息。',async function() {
  //   this.driver.findElement({ className: 'span-primary' }).click()
  //   let errtip = await this.driver.findElement({ css: "#content > div > div.inner > div" }).getText(); 
  //   return assert.deepEqual("信息不完整。", errtip);
  // });

  // When('登录页面中不录入信息', function() {
  //   this.driver.findElement({id: "name" }).sendKeys("wenqi")
  //   return this.driver.findElement({id:"pass"}).sendKeys("QW926300")
  // });

  // Then('点击登录按钮，注册失败,得到错误提示信息。',async function() {
  //   this.driver.findElement({ className: 'span-primary' }).click()
  //   let errtip = await this.driver.findElement({ css: "#content > div > div.inner > div" }).getText(); 
  //   return assert.deepEqual("信息不完整。", errtip);
  // });

  // When('登录页面中不录入信息', function() {
  //   this.driver.findElement({id: "name" }).sendKeys("wenqi")
  //   return this.driver.findElement({id:"pass"}).sendKeys("qw926300")
  // });

  // Then('登录成功',async function() {
  //  return this.driver.findElement({ className: 'span-primary' }).click()
    
  // });
  When('用户名输入{string},密码输入{string}', function (string, string2, ) {
    console.log("username,", string, "password", string2)

    this.driver.findElement({ id: "name" }).sendKeys(string);
    this.driver.findElement({ id: "pass" }).sendKeys(string2);
});

Then('点击提交，应该收到{string}',async function (string) {
    await this.driver.findElement({ css: ".span-primary" }).click();
    let errtip = await this.driver.findElement({ css:  "#content > div > div.inner > div" }).getText();
    return assert.deepEqual(string, errtip);
});
})