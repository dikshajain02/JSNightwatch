# JSNightwatch

Nightwatch JS

JS used to be the fronts-end language but now with growth in node.js, JS is now both frontend and backend language

What is nightwatchJS and its benefits?
It is an open source JS testing framework with built-in functionality for end-to-end testing

benefits:
•	quick and easy setup
•	automatic screenshots of test run
•	test case reporting built-in
•	helpful for running unit tests, API test, mobile tests
•	page object model built in
•	run one test and all using tags
•	asynchronous tests- no sleeps or waits


*in JS, all folder/file name should not have space

What is npm and how to install nightwatchJS with selenium?
npm is basically a package handler, which creates `node modules` which manages all the packages

Steps to install nightwatchJS:
1.	create nightwatch.js file – to provide path for the runner
2.	npm init - this will create package.json which will in turn create the structure for the application
3.	install npm install nightwatch --save - with this node_modules will be going to create
4.	Make following folders:
tests - to write tests under it
lib - to store drivers, selenium server
pages - to write page object 
5.	Download selenium standalone server and chrome/Firefox/IE driver from google and unzip them and move them into the lib folders
6.	Create nightwatch.json file - to configure the tests which involves reporting, screenshots, location for drivers, running the test in parallel.


Features and their settings:

1. Running in parallel
Adding this in nightwatch.json file will run the tests in parallel

"test_workers": {
    "enabled": true,
    "workers": <enter no. of process to run in parallel>.   //`auto` or no. of process 
  },
 
If enabled is false, then it won’t run in parallel. Workers can be set to` auto` - according to CPU usage, it will run those many files together or if any particular no. is defined, then those many files will be running in parallel

2. Grouping the tests
To group the tests together by putting them in the same sub-folder just. The folder name would be the name of the group. It would be helpful, for separating smoke tests and regression tests in our case

`node nightwatch --group <folder_name>`

3. Tagging the tests
If we want to run any specific file not all test cases. Defining this: `tags: [‘marqeta’]`

`node nightwatch -a <tag_name> ` 

4. Reporting
Nightwatch supports default reporting:

             1. npm install handlebars
2. Create file named as `html-reporter.hbs` to see how you want to see the report and other file named as `html-reporter.js` to generate the report
3. npm install fs
4. npm install path

`node nightwatch --reporter html-reporter.js`

5. Screenshots
Adding the below code under `test_settings` in nightwatch.json file:

"screenshots": {
    "enabled": true,
    "path": <path where you want to save the screenshot>
              },

6. Different browser
adding the below code in `nightwatch.json` will help us to run against different browsers:     `node nightwatch -e chrome`

               test_settings" : {
      "chrome”: {.        //chrome browser
        "webdriver": {
          "server_path": "lib/drivers/chromedriver",   //path where the driver lies
          "port": 9515,
          "cli_args": [
            "--verbose"
          ]
        },
        "filter": ["./tests"],     //path for which tests to run
        "desiredCapabilities" : {
          "browserName" : "chrome",
          "acceptInsecureCerts" : true
        }
      },

   “firefox" : {     //firefox browser
        "webdriver": {
          "port": "4444",
          "server_path": "lib/drivers/geckodriver",
          "cli_args": [
            "--log", "debug"
          ]
        }
      },
}
 
7. Skipping the tests
    Skipping a particular test can be done by adding :
•	`' +` as prefix before test function in your test, like this: 
    `'Demo test': '' + function (browser) `
•	prefix function keyword with exclamation `!` or some other valid character to skip the test
•	To prevent the test module from running:
module.exports = {
  '@disabled': true, // This will prevent the test module from running.

  'sample test': function (browser) {
    // test code
  }
};

8. Use of hooks
                before: function(browser) {
        console.log("hi I am in before all");
    },

    after: function(browser) {
        console.log("hi I am in after all");
    },

    beforeEach: function(browser) {
        console.log("hi I am in before each");
    },

    afterEach: function(browser) {
        console.log("hi I am in after each");
    },

9. Page Object Model
  create a folder named as pages, all the page objects should be in the format

10. Debugging issues
       
-------Please protect ports used by ChromeDriver and related test frameworks to prevent  access by malicious code.
[1564010819.593][SEVERE]: bind() failed: Address already in use (48)
[1564010819.594][INFO]: listen on IPv4 failed with error ERR_ADDRESS_IN_USE
IPv4 port not available. Exiting..

`ps -Af | grep chrome` to know what processes are using chrome driver and kill them with process id -  `kill -9 <PID_NUMBER>` 

-------if getting this error: Local package.json exists, but node_modules missing, did you mean to install?
       run `npm install` first
       then run `npm start`

--------# to keep the test running even if one test case fails, add following command in `nightwatch.json` under `test_settings`:

`"skip_testcases_on_fail": false,`


11. Mocha implementation –partially, not working properly
"test_runner" : {
      "type" : "mocha",
      "options" : {
        "ui" : "bdd",
        "reporter" : "list"
      }
    },
Mocha- receiving a done callback for async operations. When using the mocha test runner from Nightwatch some cli options are not available, like --retries, --suiteRetries, --reporter.



12. Docker integration

13. Code test coverage

14. Environment 

15. retry failed test case
