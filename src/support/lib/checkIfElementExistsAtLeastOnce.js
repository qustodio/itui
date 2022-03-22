/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  element  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 */
module.exports = (element, falsCase) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = await browser.elements(element).value;

    if (falsCase === true) {
        await expect(nrOfElements).to.have.lengthOf(
            0,
            `Element with selector "${element}" should not exist on the page`
        );
    } else {
        await expect(nrOfElements).to.have.length.of.at.least(
            1,
            `Element with selector "${element}" should exist on the page`
        );
    }
};