// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// i - node tree
// o - an array of nodes
// e - some nodes may have children, an empty tree with no nodes may be passed, need to address base case given recursion, some nodes may not be elements
// c - can't use getElementsByClassName; must use use element.childNodes, document.body, element.classList
//strategy:
/*
  //define an empty results array to store class names
  //get elements
  //check class list for each element
  //push each node with className to results array
  //test if child nodes
  //iterate over child nodes, recursively call function if childNode
  //base case === no nodes left
  //return results array
*/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode) {
  let results = [];
  currentNode = currentNode || document.body;
  let subNodes = currentNode.childNodes;
  //trying both, will remove if superfluous
  if (currentNode.classList && currentNode.classList.contains(className)) {
    //console.log('className:', className);
    results.push(currentNode);
    //console.log('element:', currentNode);
  }
  if (currentNode.hasChildNodes()) {
    _.each(currentNode.childNodes, function(subNode) {
      results = results.concat(getElementsByClassName(className, subNode));
    });
  }
  //console.log(results);
  return results;
};
