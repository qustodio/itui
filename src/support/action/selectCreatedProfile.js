/**
 * Select profile by name
 * @param  {String}   element inputField where the profile name is stored
 */
module.exports = (element) => {
  const profileName = `//div[@class="ProfileListItem__name"][contains(., "${global.world[element]}")]`;

  browser["click"](profileName);
};
