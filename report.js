const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './report',
	reportPath: './report',
	metadata:{
        browser: {
            name: 'chrome',
            version: '62'
        },
        device: 'mac',
        platform: {
            name: 'Mac',
            version: '10.12.6'
        }
    }
});