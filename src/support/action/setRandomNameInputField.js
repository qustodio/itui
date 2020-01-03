import checkIfElementExists from "../lib/checkIfElementExists";

/**
 * Set the value of the given input field to a random name or add a random name
 * to the current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   element Element selector
 */
module.exports = (method, element) => {
  /**
   * The command to perform on the browser object (addValue or setValue)
   * @type {String}
   */
  const command = method === "add" ? "addValue" : "setValue";

  var date = Date.now().toString();
  var value = "RandomName " + date;

  console.log(value);

  let checkValue = value;

  checkIfElementExists(element, false, 1);

  if (!value) {
    checkValue = "";
  }

  browser[command](element, checkValue);
};
