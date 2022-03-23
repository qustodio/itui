/**
 * Switch to an iFrame
 * @param  {String}   name of the iframe
 */
 module.exports = (iframeSelectorId) => {
    let iframeId = '#' +  iframeSelectorId;
    let iframe = await $(iframeId)
    browser.switchToFrame(iframe);
};