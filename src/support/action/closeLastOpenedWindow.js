/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export default async (obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * The last opened window handle
     * @type {Object}
     */
    const lastWindowHandle = await browser.getWindowHandles().slice(-1)[0];

    await browser.closeWindow();
    await browser.switchToWindow(lastWindowHandle);
};
