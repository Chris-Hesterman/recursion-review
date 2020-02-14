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
  };
  //eval char function
  let evalChar = function() {
    if (char === '"') {
      string();
    }
    if (char === '{') {
      object();
    }
    if (char === '[') {
      array();
    }
    if (char === 't' || char === 'f') {
      bool();
    }
    if (char === 'n') {
      isNull();
    }
    if (typeof parseInt(char) === 'number' || char === '-') {
      isNumber();
    }
  };
};
