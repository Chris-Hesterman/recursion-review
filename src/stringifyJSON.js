// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// i - takes in obj/arr/num/bool/string/
// o - return string (JSON)
// c - none
// e - if obj === function, undefined, null. In the case of null return null

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  let stringify = '';
  //if string or Array
  if (typeof obj !== 'function' && typeof obj !== 'undefined') {
    if (typeof obj === 'string') {
      stringify += '"' + obj + '"';
    } else if (Array.isArray(obj)) {
      let result = [];
      for (let item of obj) {
        result.push(stringifyJSON(item));
      }
      return '[' + result.toString() + ']';
    }
  }
  // if num or Bool concat with string
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    stringify += obj;
  }
  // if object
  if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (
        obj[key] !== 'undefined' &&
        typeof obj[key] !== 'function' &&
        key !== 'undefined' &&
        typeof key !== 'function'
      ) {
        // console.log('key:', key);
        // console.log('value: ', obj[key]);
        stringify += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + stringify.slice(0, stringify.length - 1) + '}';
  }

  return stringify;
};
