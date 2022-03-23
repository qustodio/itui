/**
 * Switch to an iFrame
 * @param  {String}   name of the iframe
 */
 module.exports = (iframeSelectorId) => {
    let iframeId = '#' +  iframeSelectorId;
    let iframe = $(iframeId)
    browser.switchToFrame(iframe);
};