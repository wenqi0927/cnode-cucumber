let { defineSupportCode } = require('cucumber')

defineSupportCode(function({setDefaultTimeout}){
    console.log("set time out")
    setDefaultTimeout(60*1000);
})