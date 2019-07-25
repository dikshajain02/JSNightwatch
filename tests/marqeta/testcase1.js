module.exports = {
    tags: ['marqeta'],
    'Open Homepage and click on a button': function (browser) {
        browser
        .url('https://www.marqeta.com')
        .waitForElementVisible('body', 1000)
        .assert.title('The Modern Card Issuing Platform | Marqeta')
        .assert.visible('div#parallax__main-wrap a.hero__cta.button.button--secondary')
        .click("div#parallax__main-wrap a.hero__cta.button.button--secondary")
        .pause(1000)
        browser.saveScreenshot('./screenshots/testcase1.jpg')
        // browser.verify.url().to.endWith('/api')
        .assert.visible('div#parallax__main-wrap h1')
        browser.assert.containsText('div#parallax__main-wrap h1', 'Build with Marqeta')
        .end();
    }
};
 