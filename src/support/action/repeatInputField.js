import checkIfElementExists from '../lib/checkIfElementExists';

/**
 * Set the value of the last given input field to the previous one
 * @param  {String}   element Element selector
 * @param  {String}   element Element selector
 */
module.exports = (previousElement, element) => {

    var value = browser.getValue(previousElement);

    console.log(value);

    let checkValue = value;

    checkIfElementExists(element, false, 1);

    if (!value) {
        checkValue = '';
    }

    browser.setValue(element, checkValue);
};
