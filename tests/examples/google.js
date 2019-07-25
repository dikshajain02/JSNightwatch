module.exports = {
    tags: ['google'],
    'Demo test Google': function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'nightwatchjs')
            .click("#tsf div.FPdoLc.VlcLAe > center > input[name='btnK']")
            .pause(1000)
            .end();
    }
};
 