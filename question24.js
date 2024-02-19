// Tests for equality and inequality with strings
var str1 = 'hello';
var str2 = 'world';
console.log("Test for equality with strings: I predict False.");
console.log(str1 == str2);
console.log("Test for inequality with strings: I predict True.");
console.log(str1 != str2);
var upperCaseString = 'HELLO';
var lowerCaseString = 'hello';
console.log("Test using the lower case function: I predict True.");
console.log(upperCaseString.toLowerCase() === lowerCaseString);
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Numerical test for equality: I predict False.");
console.log(num1 === num2);
console.log("Numerical test for inequality: I predict True.");
console.log(num1 !== num2);
console.log("Numerical test for greater than: I predict True.");
console.log(num1 > num2);
console.log("Numerical test for less than: I predict False.");
console.log(num1 < num2);
console.log("Numerical test for greater than or equal to: I predict True.");
console.log(num1 >= num2);
console.log("Numerical test for less than or equal to: I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var isRaining = true;
var isCold = false;
console.log("Test using 'and' operator: I predict False.");
console.log(isRaining && isCold);
console.log("Test using 'or' operator: I predict True.");
console.log(isRaining || isCold);
// Test whether an item is in an array
var fruitsArray = ['apple', 'banana', 'orange'];
var fruitToFind = 'banana';
console.log("Test whether 'banana' is in the fruits array: I predict True.");
console.log(fruitsArray.includes(fruitToFind));
// Test whether an item is not in an array
var animalsArray = ['dog', 'cat', 'bird'];
var animalToFind = 'fish';
console.log("Test whether 'fish' is not in the animals array: I predict True.");
console.log(!animalsArray.includes(animalToFind));
