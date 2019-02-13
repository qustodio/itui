/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = () => {

    console.log(" Opening URL : " + browser.options.baseUrl);
    browser.url(browser.options.baseUrl);

    browser.setValue("#login_form input[name='email']", "laia.pacheco+devautotest@qustodio.com");
    browser.setValue("#login_form input[name='password']", "laialaia");
    browser.click("#login_button");
};
