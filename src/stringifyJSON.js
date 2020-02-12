// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;
// // i - takes in obj/arr/num/bool/string/
// // o - return string (JSON)
// // c - none
// // e - if obj === function, undefined, null. In the case of null return 'null'

// // but you don't so you're going to write it from scratch:
// var stringifyJSON = function(obj) {
//   // define empty string
//   let stringify = '';
//   // define exception tests
//   if (obj === null) {
//     return 'null';
//     //possibly concat with stringify?
//   }
//   // if num or Bool concat with string
//   if (typeof obj === 'number' || typeof obj === 'boolean') {
//     stringify += obj;
//   }
//   // if string, stringify, concat
//   if (typeof obj === 'string') {
//     obj = '"' + obj + '"';
//     stringify += obj;
//   }
//   // if array,
//   // if (Array.isArray(obj)) {
//   //   let str = '';
//   //   obj.forEach(function(element) {
//   //     if (
//   //       typeof element !== 'function' &&
//   //       typeof element !== 'undefined' &&
//   //       typeof element !== NaN
//   //     ) {
//   //       str += stringifyJSON(element) + ',';
//   //     }
//   //   });
//   //   return '[' + str.slice(0, str.length - 1) + ']';
//   // }
//   // iterate over elements of array, concat
//   // if object
//   // iterate over properties, concat
//   //return string
// };
// // stringify.concat('[' + stringifyJSON(obj.slice(0, obj.length - 1))])
// //KISS - don't overthink it
// // def empty array - let result
// // if empty return '[]'
// // loop over obj
// // result.push(stringifyJSON(element))
// // return 'result.
// //`[${dfgdf}]`

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var stringify = '';
  if (obj === null) {
    return 'null';
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    stringify += obj;
  }

  if (typeof obj === "string") {
    obj = '"' + obj + '"';
    stringify += obj;
  }

  if (Array.isArray(obj)) {
    var str = '';
    obj.forEach(function (element) {
      if (typeof element !== 'function' && typeof element !== undefined && typeof element !== NaN) {
        str += stringifyJSON(element) + ','
      }
    });
    return '[' + str.slice(0, str.length - 1) + ']';
  }

  if (typeof obj === 'object') {
    for (let key in obj) {
      if (obj[key] !== 'undefined' && typeof obj[key] !== 'function' && key !== 'undefined' && typeof key !== 'function') {
        stringify += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + stringify.slice(0, stringify.length - 1) + '}';
  }
  return stringify;

};

// if (Array.isArray(obj)) {
//   let result = [];
//   if (obj.length === 0) {
//     return '[]';
//   }
//   for(let i = 0 ; i < obj.length; i++) {
//     result.push(stringifyJSON(obj[i]));
//   }
//   return '['+result.toString()+']';
// }
