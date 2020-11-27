/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = () => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer Yc3bo9O1jbfVxlqi9AdDHZDeh1a6Wj");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": "api_test@qustodio.com",
    "magic_link": "https://dev.qustodio.com/signup/",
    "name": "Test",
    "order": {
      "product_sku": "singtel_sg_premium_standalone_5",
      "reseller_enduser_id": "1234-5678-9012",
      "reseller_id": 27,
      "reseller_purchase_order_id": "1234-1606477548"
    },
    "qcj": true,
    "sms_enduser": {
      "sms_enduser_language": "fr",
      "sms_enduser_mobile_number": "+34678631444",
      "sms_enduser_sent": true,
      "sms_enduser_sent_date": "2016-01-01 00:00",
      "sms_requested": false
    },
    "surname": "Bar"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api-dev.qustodio.com/v1/activation_codes", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

};