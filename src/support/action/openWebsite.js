/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    if (browser.options.pipeline){
       browser.url(browser.options.baseUrl)
       }
       else {  
            const url = (type === 'url') ? page : browser.options.baseUrl + page;
            browser.url(url);
       }
};
