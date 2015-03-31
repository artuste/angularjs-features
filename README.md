<h1>Base AngularJS Application</h1>

<p>In command-line go to the project folder.</p>

<h3>Install npm</h3>
<pre>npm install</pre>

<h3>Install bower</h3>
<p>Because Bower is using Git repository, run it in Git bash command-line.</p>
<pre>bower install</pre>

<h3>Run default Grunt task</h3>
<pre>grunt</pre>

<h3>E2E Tests</h3>
<h4>Setup</h4>
<pre>npm install -g protractor</pre>
<pre>webdriver-manager update</pre>
<pre>webdriver-manager start</pre>

<h4>Configuration</h4>
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

<h4>Run tests</h4>
<pre>protractor protractor.conf.js</pre>