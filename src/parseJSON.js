// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// i - JSON string
// o - proper parsed javascript object
// e - none known
// c - none known
// strategy: identify initial character in JSON string
// send to appropriate helper method depending on actual character
// need to evaluate each character in parseable string
// need to identify endpoint of each string, and eval string up to that point
/*
1) Object
2) Array
3) String
4) Boolean
5) Number
6) Null
*/
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //define vars for index and char
  let index = 0;
  let char = json[index];
  //next function
  let next = function() {
    index++;
    char = json[index];

    if (char === ':' || char === ' ') {
      next();
    }
  };
  //eval char function
  let evalChar = function() {
    if (char === '"') {
      return string();
    }
    if (char === '{') {
      return object();
    }
    if (char === '[') {
      return array();
    }
    if (char === 't' || char === 'f') {
      return bool();
    }
    if (char === 'n') {
      return isNull();
    }
    if (typeof parseInt(char) === 'number' || char === '-') {
      return isNumber();
    }
  };
  //HELPER FUNCTIONS
  let string = function() {
    let result = '';

    next();
    while (char !== '"') {
      result += char;
      next();
    }
    return result;
  };

  let object = function() {
    let result = {};
    let key;

    next();
    if (char === '}') {
      return result;
    }
    if (!key) {
      key = evalChar();
    } else {
      result[key] = evalChar();
      next();
    }
    while (char !== '}') {
      key = evalChar();
      next();
      result[key] = evalChar();
      next();
    }
  };
  //returns an array
  let array = function() {
    let result = [];
    //call next function to increment index and char
    next();
    //if char is end of array ]
    if (char === ']') {
      return result;
    }
    //else evalChar()
    result.push(evalChar());
  };

  let bool = function() {};

  let isNull = function() {};

  let isNumber = function() {};

  return evalChar();
};
