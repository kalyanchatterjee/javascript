function generateRandomNumber(myMin, myMax) {
  min = Math.ceil(myMin);
  max = Math.floor(myMax);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(3, 5));
