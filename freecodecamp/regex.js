let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<h[a-z]*?1>/i; // Change this line
let result3 = text.match(myRegex3);
console.log(result3);

let myString = "gtttttttttt";
let myRegex4 = /go*/;
let result4 = myString.match(myRegex4);
console.log(result4);

// Longest match
let myString2 = "titanic";
let longRegex = /t[a-z]*i/i;
console.log(myString2.match(longRegex));
let shortRegex = /t[a-z]*?i/i;
console.log(myString2.match(shortRegex));

// Shorthand Character Class
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result5 = quoteSample.match(alphabetRegexV2).length;
console.log(result5);

let username = "Oceans11";
let userCheck = /[0-9]$/i; // Change this line
let result6 = userCheck.test(username);
console.log(result6);

let ohStr = "Ohhhh no";
let ohRegex = /^oh{3,4}\sno$/i; // Change this line
let result7 = ohRegex.test(ohStr);
console.log(result7);
