/**
 * Check if the given elements contains text (compare in lower case)
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
module.exports = (elementType, element, falseCase, expectedText) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = 'getValue';

    if (
        elementType === 'button' ||
        browser.getAttribute(element, 'value') === null
    ) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The expected text
     * @type {String}
     */
    let stringExpectedText = expectedText;

    //Sauce configuration. Check port where tests are launched.
    if (browser.options.port == 80) {
       stringExpectedText = stringExpectedText.replace("Windows", "Mac OS");
    }

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof expectedText === 'undefined') {
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    if (boolFalseCase) {
        expect(text.toLowerCase()).to.not.contain(stringExpectedText.toLowerCase());
    } else {
        expect(text.toLowerCase()).to.contain(stringExpectedText.toLowerCase());
    }
};
