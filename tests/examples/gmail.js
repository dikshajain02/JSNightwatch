var utils = require('../../pages/function_utils').default;

module.exports = {
    '@tags': ['login_gmail'],

    before: function(browser){
        utils(browser).openBrowser();
    },
    'Go to the login page and sign in': function (browser){
        utils(browser).userLogin();
    },
    'logout the user': function (browser) {
        utils(browser).logout();
    },
    after: function(browser){
        utils(browser).closeBrowser();
    }
};
