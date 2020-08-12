var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let obj = contacts.filter((item) => item.firstName === name);
  // Assuming firstName is unique
  if (obj.length !== 0) {
    if (obj[0].hasOwnProperty(prop)) {
      return obj[0][prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
  // Only change code above this line
}

lookUpProfile("John", "likes");
