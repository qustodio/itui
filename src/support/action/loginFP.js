
/**
 * Login to old FP with the given user and password
 * @param  {String}   user The email of the user
 * @param  {String}   pass The password for that user
 */
module.exports = (user, pass) => {

    console.log(" Opening FP URL : " + browser.options.baseUrl);
    browser.url(browser.options.baseUrl);
    browser.waitForVisible("#login_form", 10000);

    browser.setValue("#login_form input[name='email']", user);
    browser.setValue("#login_form input[name='password']", pass);
    browser.click("#login_button");
};