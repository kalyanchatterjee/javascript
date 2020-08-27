function setName(obj) {
  obj.name = "Sam";
  console.log(obj.name);
}

let person = new Object();
setName(person);
console.log(person.name);
