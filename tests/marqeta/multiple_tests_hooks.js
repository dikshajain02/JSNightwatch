module.exports = {
    tags: ['marqeta_hooks'],

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

    'Open Marqeta Home page': function (browser) {
        var page = browser.page.marqeta_home();  //giving the path for page object model

        browser
            .url('https://www.marqeta.com')
            .waitForElementVisible('body', 1000)
            .assert.title('The Modern Card Issuing Platform | Marqeta')

        page                                      //accessing the page obejct variable to assert on elements
           .assert.visible('@explore_api_button')
           .click('@explore_api_button')

        browser
            .pause(1000)// remove this
            .saveScreenshot('./screenshots/POMtestcase1.jpg')  //getting a screenshot of new page
        
        page
            .assert.visible('@explore_api_banner')
            .assert.containsText('@explore_api_banner', 'Build with Marqeta')
        .end();
    },

    'second test case' : function(browser) {
        console.log ("this is another test case");
    }
};
 