let { defineSupportCode } = require('cucumber');
let assert = require('assert');

defineSupportCode(function({Given,When,Then}){
     Given('用户{string}密码{string}成功登录页面', function (string, string2) {
        this.driver.get("http://192.168.238.128:3000/")
        this.driver.findElement({css:"body > div.navbar > div > div > ul > li:nth-child(6) > a"}).click()
        this.driver.findElement({id:"name"}).sendKeys(string)
        this.driver.findElement({id:"pass"}).sendKeys(string2)
       return this.driver.findElement({className:"span-primary"}).click()
      });

      Given('导航用户登录到发布话题页面',   function () {
       return  this.driver.findElement({css:"#create_topic_btn > span"}).click()  
      })   

      When('板块选择{string}，标题输入{string}，内容输入{string}', async function (string, string2, string3) {
        let tab = string;
        switch(tab){
          case "请选择":
           this.driver.findElement({css: "#tab-value > option:nth-child(1)"}).click()
          break;
          case "分享" :
           this.driver.findElement({css: "#tab-value > option:nth-child(2)"}).click()
          break;
          case "问答":
           this.driver.findElement({css: "#tab-value > option:nth-child(3)"}).click()
          break;
          case "招聘":
           this.driver.findElement({css: "#tab-value > option:nth-child(4)"}).click()
          break;
          default:
          break;
        }
        this.driver.findElement({id:'title'}).sendKeys(string2)
        let textarea = await this.driver.findElement({css:'.CodeMirror-scroll'})
        textarea.click()
        return this.driver.actions().mouseMove(textarea).sendKeys(string3).perform();
      });
      Then('点击提交按钮，话题发布成功', function () {
       return this.driver.findElement({css:'#create_topic_form > fieldset > div > div > div.editor_buttons > input'}).click()
        });  
      });
      
