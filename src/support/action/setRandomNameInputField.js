import setInputField from "./setInputField";

/**
 * Set the value of the given input field to a random name or add a random name
 * to the current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   element Element selector
 */
module.exports = (method, element) => {

  let date = await Date.now().toString();
  let value = "RandomName " + date;

  setInputField(method, value, element);
};