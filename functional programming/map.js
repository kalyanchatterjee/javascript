var animals = [
  { name: "BugsBunny", species: "rabbit" },
  { name: "Elsa", species: "dog" },
  { name: "Ratna", species: "dog" },
  { name: "Lepu", species: "dog" },
  { name: "Tintin", species: "human" },
];

namesOfAnimals = animals.map((animal) => animal.name);

namesOfDogs = animals
  .filter((animal) => animal.species === "dog")
  .map((animal) => animal.name);

console.log(namesOfAnimals);
console.log(namesOfDogs);
