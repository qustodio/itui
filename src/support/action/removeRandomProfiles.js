/**
 * Remove profiles by name containing a text
 * @param  {String}   text  The text included in the profile name
 */

module.exports = (text) => {

  // get all profiles
  var profiles = browser.$$(".ProfileListItem");

  // get all profiles but the Sample Kid and the Test Kid, check if it's a random profile and then delete it
  for (let i = 0; i < (profiles.length - 2); i++) {
    if (browser.$(".row div:nth-child(3) > div").getText().includes(text)) {
    
      $(".row div:nth-child(3) > div").click();
      $(".Header__icon.waves-effect.waves-color-grey.Header__icon--right .IconWrapper").waitForDisplayed();
      $(".Header__icon.waves-effect.waves-color-grey.Header__icon--right .IconWrapper").click();
      $(".Header__icon.waves-effect.waves-color-grey.Header__icon--right .IconWrapper").waitForDisplayed();
      $(".Header__icon.waves-effect.waves-color-grey.Header__icon--right .IconWrapper").click();
      browser.acceptAlert();
      $(".row div:nth-child(2) > div").waitForDisplayed();

    }
  }
};
