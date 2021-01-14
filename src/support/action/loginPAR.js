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
    $('#login').waitForDisplayed();

    const username =  $("#login input[name='username']");
    const password =  $("#login input[name='password']");
    const loginButton =  $(".Login__button--container > button");
    username.setValue(user);
    password.setValue(pass);
    loginButton.click();


};