// module.exports = function (browser){
//     this.openBrowser = function(){
//         browser
//             .windowMaximize()
//             .url('https://www.gmail.com')
//             .waitForElementVisible('body',1000);
//         return browser
//     };
//     this.userLogin = function(){
//         browser
//             .click('input#identifierId')
//             .setValue('input#identifierId', 'webqemarqeta@gmail.com')
//             .click('div#identifierNext span > span')
//             .waitForElementVisible('input[name="password"]', 1000)
//             .click('input[name="password"]')
//             .setValue('input[name="password"]', 'Marqeta@123')
//             .click('div#passwordNext span > span')
//     };
//     this.logout = function(){
//         browser
//             .waitForElementVisible('#gb > div.gb_Md.gb_3d.gb_Ud > div.gb_Tc.gb_Na.gb_Sc.gb_1d > div > div.gb_Ia.gb_dd.gb_yg.gb_g.gb_Hf > div > a > span',1000)
//             .click('#gb > div.gb_Md.gb_3d.gb_Ud > div.gb_Tc.gb_Na.gb_Sc.gb_1d > div > div.gb_Ia.gb_dd.gb_yg.gb_g.gb_Hf > div > a > span')
//             .pause(3000)
//             .click('#gb_71')
//     };
//     this.closeBrowser = function(){
//         browser
//             .pause(3000)
//             .end();
//     };
//     return this;
// };
