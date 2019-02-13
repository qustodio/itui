/**
 * Switch to an iFrame
 * @param  {String}   name of the iframe
 */
module.exports = (iframeSelector) => {
    browser.waitForExist(iframeSelector);
    var my_frame = $(iframeSelector).value;
    browser.frame(my_frame);
};
