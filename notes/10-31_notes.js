
////////////////////////////////
//////////// Strings ///////////
////////////////////////////////

// using variable
var fName = 'ray';
var lName = 'vazquez';

// getting length of a string
fName.length // returns 3

// contactinating (bringing values together)
var fullName = fName + " " + lName + "jr,";

// the same can be accomplished with the .concat string function
fullName = fName.concat(" ", lName, " ", "jr.");


// all objects are zero indexed, meening "h" in the variable greeting, 
// though its literally in the first position, has an index postion of 0
var greeting = "hello everyone!"

// we can access indexed items with square brackets
console.log(greeting[1]) // returns 'e'

// in JavaScript, we can access the last index of a string or array 
// using a negative number however 

console.log(greeting[greeting.length -1]) // returns "!"

// the console.log() function
// logs a message to the console
console.log(fullName); // logs 'ray vazquez jr.' to the console

// substrings
// create a string from a given variable using the subStr 

var reallyLongString = "this is a really really really really long string";

var subString1 = reallyLongString.slice(0, 16)
var subString2 = reallyLongString.substr(38, reallyLongString.length -1)

// we can also concactinate variables with string values
var newString = subString1.concat(" ", subString2)

console.log(newString); // return "this is a really long string"

// .replace
// you can replace a letter or substring with another string with the replace function
// ie:
console.log("hello world!".replace("!", "s!"))
console.log(newString.replace("really", "")); // returns "this is a long string"
