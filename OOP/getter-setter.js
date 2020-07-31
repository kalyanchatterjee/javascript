function AbstractCircle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw 10");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    },
  });
}

const circle10 = new AbstractCircle(10);
circle10.draw();
console.log(circle10.defaultLocation);
circle10.defaultLocation = { x: 1, y: 1 };
console.log(circle10.defaultLocation);
