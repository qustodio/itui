
import setInputField from './setInputField';

/**
 * Set the value of the given input field to a random email or add a random email 
 * to the current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   element Element selector
 */
module.exports = (method, element) => {

    let date = browser.now().toString();
    let value = "qa.qustodio.e2etest+" + date + "@qustodio.com";

    setInputField(method, value, element);
};