var a;
// var a = "Hello world";

function b() {
  console.log("Called b");
}

b();
console.log(a);

// Variable environment
function b1() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b1();
}

var myVar = 1;
console.log(myVar);
a();

// In the above, if we declared, the function name as 'a', it would throw an error saying "a is not a function".
// That's because, even though in JavaScript, variable declaration and function declaration are hoisted,
// variable assignment takes precedence. If we comment out, a = "Hello World" in line 2, a will be considered a function

// Read more: https://stackoverflow.com/questions/40675821/what-happens-when-javascript-variable-name-and-function-name-is-the-same
