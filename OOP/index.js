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
  this.draw = function () {
    console.log("draw 2");
  };
}
const another = new Circle(1);
another.draw();

// In JavaScript functions are objects
const circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw 2");
  };`
);

console.log(circle1);
