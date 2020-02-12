// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, element) {
  let results = [];
  element = element || document.body;
  let kids = element.children;

  if (element.classList.includes(className)) {
    results.push(element);
  }
  _.each(kids, function (el) {
    // let classes = Array.from(el.classList);

    if (classes.includes(className)) {
      results.push(el);
    }
    if (!el.children.length) {
      return;
    }
    if (el.children.length) {
      console.log(el.children)
      results.push(getElementsByClassName(className, el));
    }
  });
  console.log(results);
  return results;
};
  //get elements
  //results array
  //check class list for each element
  //push matches to results
  //endcase no children
  //otherwise recall function