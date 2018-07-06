function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

console.log(outerFunction()) // [Function: innerScope]



var myScope = outerFunction();
 
console.log(myScope()) // I'm sort of a secret.

