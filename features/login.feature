@login
Feature: login function Test
   登录功能测试。
   负责人：qiwen
   时间：2017-10-22


    # Scenario: 不填写任何信息
    # 登录时，不填写任何信息点击登录按钮，会有“信息不完整”的提示
    # Given 导航到登录页面
    # When  登录页面中不录入信息
    # Then  点击登录按钮，登录失败，得到错误提示信息

    
    Scenario Outline: 不同登录场景
        Given 导航到登录页面
        When 用户名输入"<username>",密码输入"<pass>"
        Then 点击提交，应该收到"<tipmessage>"
        Examples:
        |username|pass|tipmessage|
        |        |    |×\n信息不完整。|   
        |wenqi|    |×\n信息不完整。|
        |     |123456|×\n信息不完整。|
        |wenqi|123456|×\n用户名或密码错误|    
        |wenqi|QW926300|×\n用户名或密码错误|
     