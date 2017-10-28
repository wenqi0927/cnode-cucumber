@register
Feature: 用户注册
测试Cnode社区注册功能
测试人：齐雯
时间：2017/10/28

  Background:进入注册页面
      Given 进入注册页面

  Scenario Outline: 不同注册场景
     进入注册页面
     When 用户名输入"<username>",密码输入"<pass>",重复密码输入"<repass>",邮箱输入"<email>"
     Then 点击注册，应该收到"<tipmessage>"
     Examples:
     |username|pass|repass|email|tipmessage|
     |apple| | | |×\n信息不完整。|
     | | | | |×\n信息不完整。|
     | |123456| | |×\n信息不完整。|
     |apple|123456|654321|1272379959@qq.com|×\n两次密码输入不一致。|
    