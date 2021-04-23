

/**
 * Set the value of the last given input field to the previous one
 * @param  {String}   element Element selector
 * @param  {String}   element Element selector
 */
 module.exports = (previousElement, element) => {

    let command = 'getValue';
 
     var value = $(previousElement)[command]();
 
     console.log(value);
 
     let checkValue = value;
 
     if (!value) {
         checkValue = '';
     }
 
     let commandSet = 'setValue';
 
     $(element)[commandSet](checkValue);
 
 };