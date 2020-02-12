module.exports = () => {
  const profileName = `//div[@class="ProfileListItem__name"][contains(., "${global.profileToDelete}")]`;

  browser["click"](profileName);
};
