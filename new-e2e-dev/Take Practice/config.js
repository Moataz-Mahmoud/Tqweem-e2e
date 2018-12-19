exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    capabilities: {
        'browserName': 'Chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }
    },

    specs: ['takePracticeTest.js']
};