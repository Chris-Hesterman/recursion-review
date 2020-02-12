// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// i - takes in obj/arr/num/bool/string/
// o - return string (JSON)
// c - none
// e - if obj === function, undefined, null. In the case of null return 'null'

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // define empty string
  let stringify = '';
  // define exception tests
  if (obj === null) {
    return 'null';
    //possibly concat with stringify?
  }
  // if num or Bool concat with string
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    stringify += obj;
  }
  // if string, stringify, concat
  if (typeof obj === 'string') {
    obj = '"' + obj + '"';
    stringify += obj;
  }
  // if array,
  if (Array.isArray(obj)) {
    let str = '';

    obj.forEach(function(element) {
      if (
        typeof element !== 'function' &&
        typeof element !== 'undefined' &&
        typeof element !== NaN
      ) {
        str += stringifyJSON(element) + ',';
      }
    });
    return '[' + str.slice(0, str.length - 1) + ']';
  }
  // iterate over elements of array, concat
  // if object
  // iterate over properties, concat
  //return string
};
