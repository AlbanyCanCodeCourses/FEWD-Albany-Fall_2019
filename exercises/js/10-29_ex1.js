/**
 * JavaScript gives us a function called console.log() to print our results to the console.
 * Using the console.log() function, write the following excercises to the console.
 * ie: console.log("hello world") will print "hello world" to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */

/////////////////////////////////
///////////  Strings ////////////
/////////////////////////////////

/**
 * create a variable and set the value to your first name
 *  ie: var fullName = "your full name"
 *  console.log(fullName)
 * @returns {string}
 */

 var firstName = "Ramon";

// console.log(firstName);

// /**
//  * Create a variable called middleName and set the value to your middle name.
//  * @returns {string}
//  */
 var middleName = "Ambrose";
// console.log(middleName);

// /**
//  * Create a variable called lastName and set the value to your last name.
//  * @returns {string}
//  */

var lastName = "Vazquez";
// console.log(lastName);

// /** Contactinate firstName, middleName and lastName. Store the result in a variable called fullName.
//  * @returns {string}
//  */

 var fullName = firstName.concat(" ", middleName, " ", lastName);
console.log(fullName);

// fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);

// /**
//  * Create a substring of the last three letters of fullName.
//  * @returns {string}
//  */
// console.log(fullName.length);
// var subString = fullName.substring(fullName.length - 3, fullName.length);

// console.log(subString);

// console.log(fullName.charAt(fullName.length - 10).toUpperCase());

// /**
//  * Access the last letter in fullName.
//  * @returns {string}
//  */

// var lastLetter = fullName.charAt(0);
// console.log(lastLetter);

// //////////////////////////////////
// /////////// Arrays ///////////////
// //////////////////////////////////

// /**
//  *
//  * Create an array named fullNameArray. Using fullName, populate fullNameArray with the values of your first middle and last names.
//  * @returns {array}
//  */

// // var fullNameArray = [firstName, middleName, lastName];

// var fullNameArray = [];

// fullNameArray.push(firstName);
// fullNameArray.push(middleName);
// fullNameArray.push(lastName);

// console.log(fullNameArray);

// /**
//  * Access the values of your first, middle and last names from fullNameArray. Store the results in a greeting.
//  * ie: var greeting = "hello, my name is @string @string @string ";
//  * @returns {string}
//  */

// var greeting =
//   "Hello, my name is, " +
//   fullNameArray[0] +
//   " " +
//   fullNameArray[1] +
//   " " +
//   fullNameArray[2];
// console.log(greeting);

// /**
//  * Create an array of your five top favorite takeout foods.
//  * @returns {array}
//  */

// var takeoutFoods = ["pizza", "chinese", "indian", "mexican", "thai"];

// /**
//  * Remove the first item from the takeout array. Store the result in a variable.
//  * @return {string}
//  */

// takeoutFoods.shift();
// console.log(takeoutFoods);

// /**
//  * Add a new item to the beginning of the takeout array.
//  * @returns {string}
//  */

// takeoutFoods.unshift("korean");

// console.log(takeoutFoods);

// /**
//  * Remove and item from then end of the takeout array. Store the result in a variable.
//  * @returns {string}
//  */

// var last = takeoutFoods.pop();
// console.log(takeoutFoods);

// /**
//  * Add a new item to the end of the takeout array.
//  * @returns {string}
//  */

// takeoutFoods.push("moroccan");
// console.log(takeoutFoods);

// /**
//  * Return a copy of index items 2 through 4. Store the results in a variable.
//  * @returns {array}
//  */

// var slicedFoods = takeoutFoods.slice(2, 5);
// console.log(slicedFoods);

// /**
//  * Create and empty array. Copy the last three items from the takeout array into the new array.
//  * @returns {array}
//  */

// var newEmptyArray = [];

// for (var i = 0; i < slicedFoods.length; i++) {
//   newEmptyArray.push(slicedFoods[i]);
//   console.log(newEmptyArray);
// }

// /**
//  * Create a comma-delimited string using the takout array.
//  * @returns {string}
//  */

// var takeoutString = takeoutFoods.join(",");
// console.log(takeoutString);

///////////////////////////////////////////////
////// Equality Operations and Booleans ///////
///////////////////////////////////////////////

// Evaluate the following statements for equality

/**
 * 8 is greater than 9
 * @returns {boolean}
 */
console.log(8 > 9)
/**
 * 10 divided by two is less than or equal to 20 divided by four
 * @returns {boolean}
 */

console.log( 
   (10 / 2 ) <= (20 / 4)
  )

/**
 * not zero is not equal to zero divided by zero
 * @returns {boolean}
 */

 console.log(!0 != 0 / 0)


/**
 * nineteen minus seven is equal to the length of "length of fullName"
 * @returns {boolean}
 */

console.log( 
   (19 - 7)  === "length of fullName"
 )

/**
 * one hundred eightseven is less than or equal than fullName.length
 * @returns {boolean}
 */

console.log(
   
  187 <= fullName.length
 )

/**
 * thirteen plus six is not equal to twentythree minus 5
 * @returns {boolean}
 */

console.log(
  
  (13 + 6 ) != (23 - 5)

 );
 

/**
 * seventyfive or seventyfive and twentyfour times three
 * @returns {number}
 */

console.log(
  75 || 75 && (24 * 3)
)

// Please - Parenthasis
// Excuse - Exponents
// My - Multiplication
// Dear - Division
// Aunt - Addition
// Sally - Subtraction

/**
 * "my first name" is not equal to "My first name"
 * @returns {boolean}
 */
console.log ("my first name" != "My first name")


/**
 * four plus three and six times eight
 * @returns {number}
 */
console.log( (4 + 3) && (6 * 8));


/**
 * fullName[1] or fullName.length + 1
 * @returns {string}
 */

 console.log(fullName[1] || fullName.length + 1);
 

/**
 * "four" is equal to 4
 * @returns {boolean}
 */

console.log( "four" === 4)


/**
 * 0 isFinite
 * @returns {boolean}
 */

console.log(!isFinite(0))

