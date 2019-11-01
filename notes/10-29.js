////////////////////////////////
//////////// Data Types ////////
////////////////////////////////

// string
// number
// booleans
// null
// undefined


////////////////////////////////
//////////// Variables /////////
////////////////////////////////

// (broad definition) a container for any given value that may be referenced in multiple locations

// Variables are declared with var, const or let keywords 
// var - general varable declaration
// const - used when it is known that the values will never change
// let - block level declaration (more on this when we cover functions)
 
// ie:
var fName = "Mickey";
var lName = "Mouse"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 'Satruday', "Sunday"]

var sayName = function (firstName, lastName) { 
  let greet = "hello, ";
  return greet.concat(firstName, " ", lastName, "!")
}

sayName("minnie", "mouse")

////////////////////////////////
//////////// Strings ///////////
////////////////////////////////

// a string is any value that can is contained within quotation marks
// ie:

var cat = "Socks";
var greeting = "hello world!"
var randomNumbers = "12345";

////////////////////////////////
//////////// Numbers ///////////
////////////////////////////////

// A number of any kind. whole or decimal (floating point)
// ie:
var num1 = 8;
var num2 = 23;
var num3 = 3.14;

////////////////////////////////
//////////// Booleans///////////
////////////////////////////////

var isTrue = true;
var isNotTrue = false;

////////////////////////////////
//////////// Null //////////////
////////////////////////////////

// an unknown value

////////////////////////////////
////////// Undefined ///////////
////////////////////////////////

// this can have a couple of different definitions
//    - a variable that variable that has been declared but has no value assigined to it
//    - an object that does not exisit in the context of the 
//    - a variable declaraiton is a statment and will always result in undefined 
  
// ie:
var one;
var variable; 
    // results in undefined

////////////////////////////////
////// Equality  operators /////
////////////////////////////////

//    <   less than
//    >   greater than
//    <=  less than or equal to
//    >=  Greater than or equal to 

////////////////////////////////
//// Comparrison operators /////
////////////////////////////////

//    ==  Equal: ompares two values 
//          ie 1 == "1" returns true
//    === Strict Equal: Compares two values and data type
//          ie 1 === "1" returns false 
//    != Not Equal: 

////////////////////////////////
////// Logical Operators ///////
////////////////////////////////

|| // logiacl OR
&& // Logical and