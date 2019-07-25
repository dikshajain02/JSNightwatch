module.exports = {
    tags: ['amazon'],
    'Demo test Amazon': function (browser) {
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
            .assert.visible('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', 'Alexa')
            .click("form[name='site-search'] div.nav-right > div > input")
            .pause(1000)
            .end();
    }
};
 