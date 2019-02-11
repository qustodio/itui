/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   elem          Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedValue The value to check against
 */
module.exports = (isCSS, attrName, elem, falseCase, expectedValue) => {
    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    const command = isCSS ? 'getCssProperty' : 'getAttribute';

    /**
     * The label to identify the attribute by
     * @type {String}
     */
    const attrType = isCSS ? 'CSS attribute' : 'Attribute';

    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let attributeValue = browser[command](elem, attrName);

    /**
     * when getting something with a color or font-weight WebdriverIO returns a
     * object but we want to assert against a string
     */
    if (attrName.match(/(color|font-weight)/)) {
        attributeValue = attributeValue.value;
    }


    /**
     * The expected text
     * @type {String}
     */
    let stringExpectedText = expectedValue;

    //Sauce configuration. Check port where tests are launched.
    if (browser.options.port == 80) {
       stringExpectedText = stringExpectedText.replace("Windows", "Mac");
    }

    if (falseCase) {
        expect(attributeValue).to.not
            .contain(
                stringExpectedText,
                `${attrType} of element "${elem}" should not contain "${attributeValue}"`
            );
    } else {
        expect(attributeValue).to
            .contain(
                stringExpectedText,
                `${attrType} of element "${elem}" should not contain "${attributeValue}", but "${stringExpectedText}"`
            );
    }
};
