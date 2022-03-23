/**
 * Switch to an iFrame
 * @param  {String}   name of the iframe
 */
 module.exports = (iframeSelectorId) => {
    let iframeId = '#' +  iframeSelectorId;
    let iframe = await $(iframeId)
    await browser.switchToFrame(iframe);
};