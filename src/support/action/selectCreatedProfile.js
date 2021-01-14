/**
 * Select profile by name
 * @param  {String}   selector inputField where the profile name is stored
 */
module.exports = (selector) => {
    const profileName = `//div[@class="ProfileListItem__name"][contains(., "${global.world[selector]}")]`;
  
    browser["click"](profileName);
  };