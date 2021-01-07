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
      browser.click(".row div:nth-child(3) > div");
      browser.waitForVisible(".Screen.ProfileAddDeviceInstructions .Header__icon-wrapper.Header__icon-wrapper--right .IconWrapper", 10000);
      browser.click(".Screen.ProfileAddDeviceInstructions .Header__icon-wrapper.Header__icon-wrapper--right .IconWrapper");
      browser.waitForVisible(".ProfileEdit.Screen .Header__icon-wrapper.Header__icon-wrapper--right .IconWrapper", 10000);
      browser.click(".ProfileEdit.Screen .Header__icon-wrapper.Header__icon-wrapper--right .IconWrapper");
      browser["alertAccept"]();
      browser.waitForVisible(".row div:nth-child(2) > div", 10000);
    }
  }
};
