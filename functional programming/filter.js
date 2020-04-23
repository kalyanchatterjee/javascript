var animals = [
  { name: "BugsBunny", species: "rabbit" },
  { name: "Elsa", species: "dog" },
  { name: "Ratna", species: "dog" },
  { name: "Lepu", species: "dog" },
  { name: "Tintin", species: "human" },
];

var isDog = (animal) => {
  return animal.species === "dog";
};
var dogs = animals.filter(isDog);
console.log(dogs);
