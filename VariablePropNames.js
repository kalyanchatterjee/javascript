let ourDogs = {
  snowy: {
    breed: "Spitz",
    dob: "March 23, 1997",
    ageDied: 16,
  },
  elsa: {
    breed: "Mixed breed",
    dob: "Sep 23, 2015",
    ageDied: "n/a",
  },
};

const dogs = Object.keys(ourDogs);

dogs.forEach((dog) => {
  console.log(typeof dog);
});

const values = Object.values(ourDogs);

console.log(values);

values.forEach((value) => {
  console.log(value.dob);
});
