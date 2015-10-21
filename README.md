# AngularJS Features
It's SPA based on AngularJS. This application show how to use some of the AngularJS features in action.<br /> Probably it's a right place if you want to see the possibilities which give AngularJS.

## Features
* Animations
* Growl Messages (toastr)
* Custom forms (using JSON config/scheme)
* Lazy-loading the modules (ocLazyLoad)
* Interpolation (examples)
* JS Patterns (examples)
* Promises/callbacks (examples)
* Scopes (examples)
* AngularJS Watcher Component (will show you how many watchers is on)
* Directives (examples)
* E2E (end-to-end tests using Protractor)

## Running the application
<pre>npm install</pre>
<pre>bower install</pre>
<pre>grunt</pre>

## E2E Tests
### Setup
<pre>npm install -g protractor</pre>
<pre>webdriver-manager update</pre>
<pre>webdriver-manager start</pre>

### Configuration
<b>protractor.conf.js</b>
<pre>
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e-basic.js'
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
</pre>

### Run tests
<pre>protractor protractor.conf.js</pre>
