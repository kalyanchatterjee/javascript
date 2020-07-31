// Using object literals to define an object
// Here circle is an object with three members - radius, location and draw
// If a member is a function we refer to it as a 'method', other members are called 'properties'
/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
circle.draw();
*/

// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw 1");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  // Implementation details - use Abstraction a.k.a hide implementation details
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function (factor) {
    //
  };
  this.draw = function () {
    this.computeOptimumLocation(0.1);
    console.log("draw 2");
  };
}
const another = new Circle(1);
another.draw();

// In JavaScript functions are objects
// Here 'Function' is an object
const circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw 2");
  };`
);

const anotherCircle = new circle1(5);

console.log(circle1);

// Reference type vs Value types
let x = 10;
let y = x;

x++;

console.log(x);
console.log(y);

let objX = { value: 10 };
let objY = objX; // Now objX and objY refer to the same object
objX.value++;

console.log(objX.value);
console.log(objY.value);

// Passing to a function
function increase(x) {
  x++;
  console.log("x is " + x);
}
increase(x); // passing a copy of x
console.log(x); // This is the variable x we declared in the beginning

function increaseByOne(obj) {
  obj.value++;
  console.log("Inside function obj.value is " + obj.value);
}

increaseByOne(objX);

console.log(objX.value);

// Adding Properties
objX.color = "red";
const propName = "origin";
objX[propName] = "Canada";
// Deleting properties
delete objX.color;

// Iterating through properties and methods of an object
for (let key in circle) {
  console.log(key, circle[key]); // prints both properties and methods
}
// Only properties
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}
// Better of doing the above
const keys = Object.keys(circle);
console.log(keys);
// Check if an object has a specific key
if ("radius" in circle) {
  console.log("radius found");
}
