/**
 * By default this refers to the outer most global object, the window.
 * We can easily show how invoking functions in different ways binds
 * the this value differently:
 */

var myFunction = function () {
  console.log(this);
};

// TEST 1
// myFunction();

var myObject = {};
myObject.myMethod = function () {
  console.log(this);
};

// TEST 2
// myObject.myMethod();

// Ref: Look at section: Scope of 'this'
// https://medium.com/javascript-in-plain-english/everything-you-wanted-to-know-about-javascript-scope-e991a8288bc
myObject.anotherFunction = function () {
  var that = this;
  console.log(that);
  setTimeout(function () {
    console.log(that);
  }, 1000);
};

// TEST 3
myObject.anotherFunction();
