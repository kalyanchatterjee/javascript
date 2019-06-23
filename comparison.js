var a = 0;
var b = false;

if (a === b) {
  console.log("They are equal!");
} else {
  console.log("Nope, not equal!");
}

/*
How to avoid coersion errors? 
============================
Use === (strict equality) by default!!!!!

== causes strange errors, that's, double equals
1 == true
true
1 === true
false


*/
