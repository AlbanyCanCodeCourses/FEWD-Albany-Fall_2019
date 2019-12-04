////////////////////////
//////// Arrays ////////
////////////////////////

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/** Create an array with three names
 * ie var names = [ name1, name, name3]
 * @returns {array}
 */

var names = ["mark", "sue", "sally"];

/**
 * Create a second array with three different names
 * @returns {array}
 */

var moreNames = ["heather", "mary", "cal"];

///////////////////////////////////
////// Conditionals Statments /////
///////////////////////////////////

/**
 *
 * @see https://developer.mozilla.org/en-US/docs /Web/JavaScript/Reference/Statements/if...else
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
 */

/**
 *
 * If 3 is less than 5, print "three is less than five"
 * @returns {string}
 */

if (3 < 5) {
   console.log("three is less than five")
} else {
    console.log("threes is not less than five")
 }

if (true) {
  // run this code
} else { 
  // run this code instead
}

/**
 * If "5" plus "5" is equal to "five plus five" print "they are the same value and type".
 * Otherwise, print "They are not the same value and type"
 * @returns {string}
 */

// if (("5" + "5") === "five plus five") {
//   console.log("they are the same value and type");
// } else { 
//   console.log("They are not the same value and type")
// }

/**
 * Write a program that prints the numbers from 1 to 100.
 * For numbers divisible by 3, print “Fizz”.
 * For numbers divisible by 5, print “Buzz”.
 * For numbers divisible by both 3 and 5, print “FizzBuzz”
 *
 * @returns {string}
 */


for (var i = 1; i <= 100; i++) { 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, ":FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log(i, ":Fizz");
  }
  else if (i % 5 === 0) { 
    console.log(i, ":Buzz ");
  }
  else {
    console.log(i)
  }
}

///////////////////////////
///////// Loops ///////////
///////////////////////////

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

/**
 * Create an array that combines both name arrays.
 * Console log the names sorted alphabetically
 *
 * @returns {array}
 */ 

var combinedNames = [];

for (var i = 0; i < names.length; i++) {
  combinedNames.push(names[i])
}
console.log(combinedNames)
 
for (var i = 0; i < moreNames.length; i++) { 
  combinedNames.push(moreNames[i])
}

console.log(combinedNames)

var sortedNames = combinedNames.sort()



// Dont .Repeat .Yourself
// /////////////////////////////
// // Challenge create a function that combines two arrays into one
// /////////////////////////////



// /**
//  * Remove all names in the combined names array that beging with the letters a, r, m
//  * @returns {array}
//  */

// var filteredNames = []

// for (var i = 0; i < sortedNames.length; i++) { 
//   if (sortedNames[i][0] === "m") { 
//     var name;
//     name = sortedNames[i]
//     sortedNames.pop(name)
//     console.log(filteredNames)
//   }

// }


// /**
//  * Check if the length of the new filtered array is an even or odd number.
//  * If it is even, print "it is even".
//  * Otherwise print "it is odd".
//  * @returns {string}
//  */

// if (sortedNames.length % 2 === 0) {
//   console.log('its even')
// }
// else { 
//   console.log('its odd')
// }

//  /**
//  * For each item in the combined names array print a greeting message.
//  *
//  * @returns {string}
//  */

// for (var i = 0; i < sortedNames.length; i++) { 
//   console.log("hello my name is, " + sortedNames[i] )
// }

////////////////////////
/////// Functions //////
////////////////////////

// var moreMoreNames = 'rick scott june joy'.split(' ')

// var greeting = function (names) {
//   for (var i = 0; i < names.length; i++) {
//     return "hello my name is, " + names[i]
//   }
// }
// console.log(greeting(moreMoreNames))

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

/**
 * Create a function that retuns the sum of two parameters
 * ie: var add = function (number, number) {
 *   return number + number
 * }
 *
 * @param
 * @param
 * @returns {number}
 */

// var add = function (num1, num2) {
// // locally scoped variables
//   var a = 1;
//   var b = 2;

//    return num1 + num2 + a + b
//  }

// console.log(add(3, 10))



 /**
  * Write a program that retuns the difference of two parameters
  * @param
  * @param
  * @returns [number] 
  */

var subtract = function (num1, num2) {
   return num1 - num2
 }
console.log(subtract(9, 4))



// /**
//  * Write a program that retuns the product of two parameters
//  * @param
//  * @param
//  * @returns {number}
//  */

// var multiply = function (a, b) { 
//   return a * b
// }
// console.log(multiply(10, 8))
// /**
//  *Write a program that divides the return value of the add function by
//  * the return value of the subtract function
//  * @param
//  * @param
//  * @returns {number}
//  */

// var divide = function (a, b) {
//    return a / b
// }
 
// // console.log(divide(20, 4))


// console.log("add and subtract:", add(3, subtract(2, multiply(2, (divide(4, 6))))))

// // var fun = function () { } // function declaration

// // fun()


(function phone(name) { 
  console.log("hello " + name)
} ("sue") )


/////////////
// objects //
/////////////


'heloow world'.toUpperCase()

var obj = {
  name: 'Ray'
}


console.log(obj['name'])


/////////////
/// Scope ///
/////////////


/**
 * Write a program that accepts one parameter.
 * Print "it's hot outside" when the temperature is above 90 degrees.
 * Print "the temperature is comfortable" if the temperature is between 50 and 90 degrees,
 * Otherwise, it should print "it's to cold to go outside, it's a coding day! :)"
 *
 * @param {number}
 * @returns string
 */

const weatherForcast = function (temp) {
  if (temp >= 50 && temp <= 90) {
    console.log("the temperature is comfortable");
  } else if (temp > 90) {
    console.log("it's hot outside")
  } else { 
    console.log("it's to cold to go outside, it's a coding day! :)")
  }
};


weatherForcast(50)
weatherForcast(90)
weatherForcast(91)
weatherForcast(49)