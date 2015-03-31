// Run tests:
// cmd: protractor protractor.conf.js

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'tests/e2e/*.js',
        'tests/e2e/**/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:1338',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};