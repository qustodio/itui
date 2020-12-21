/**
 * Login to PARWEB with the given user and password
 * @param  {String}   user The email of the user
 * @param  {String}   pass The password for that user
 */
module.exports = (user, pass) => {

    const PARpath = "/parents-app";
    const PARurl = browser.options.baseUrl + PARpath;

    console.log(" Opening FP URL : " + PARurl);
    browser.url(PARurl);
    browser.waitForVisible("#login", 10000);
    
    browser.setValue("#login input[name='username']", user);
    browser.setValue("#login input[name='password']", pass);
    browser.click(".Login__button--container > button");
};
