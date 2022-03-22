/**
 * Switch to an iFrame
 * @param  {String}   name of the iframe
 */
 module.exports = (iframeSelectorId) => {
    var iframeId = '#' +  iframeSelectorId;
    var iframe = await $(iframeId)
    await browser.switchToFrame(iframe);
};