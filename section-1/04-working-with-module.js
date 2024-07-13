/*

e.g of built-in module

const os = require("os");

console.log(os.type()); // to get user os
console.log(os.platform()); // to get user platform
*/

const car = {
  brand: "BMW",
  model: "z4",
};

//console.log(car);

module.exports = car; // returns { brand: 'BMW', model: 'z4' }

//or
// exports.car = car; // returns {car: { brand: 'BMW',model : 'z4' }}
