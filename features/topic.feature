@topic
Feature:发布话题功能测试
测试Cnode社区发布话题功能
测试人：齐雯
时间：2017/10/29

   Background:登录到系统
    Given 用户"wenqi"密码"qw926300"成功登录页面

   Scenario: 成功发布话题
       Given 导航用户登录到发布话题页面
       When 板块选择"分享"，标题输入"helloeveryone"，内容输入"尽量把话题要点浓缩到标题里"
       Then 点击提交按钮，话题发布成功
   
