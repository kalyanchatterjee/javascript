function sandwichmaker() {
  const magicIngredient = "peanut butter";
  function make(filling) {
    return magicIngredient + " and " + filling;
  }
  return make;
}

let f = sandwichmaker();
console.log(f("jelly"));
