function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;

a();

// ~ 1:17:00 in the video - https://www.youtube.com/watch?v=Bv_5Zv5c-Ts
// When you invoke a function, JavaScript creates an outer reference to the
// outer global execution context.

// This forms the scope chain. It tries to find myVar in b(). Couldn't find it,
// so it went to the outer environment reference, which was the global execution context.

// If you moved b() inside of a(), JavaScript will map the outer reference for b() to a()

// Lexical structure (where the code physically sits) defines the outer environment. This is
// known as Scope Chain.
