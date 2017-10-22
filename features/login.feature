Feature: login function Test
   登录功能测试。
   负责人：qiwen
   时间：2017-10-22


   Scenario: 不填写任何信息
   登录时，不填写任何信息点击登录按钮，会有“信息不完整”的提示
    Given 导航到登录页面
    When  登录页面中不录入信息
    Then  点击登录按钮，登录失败，得到错误提示信息