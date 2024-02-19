// Tests for equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'world';
console.log("Test for equality with strings: I predict False.");
console.log(str1 == str2);
console.log("Test for inequality with strings: I predict True.");
console.log(str1 != str2);

let upperCaseString: string = 'HELLO';
let lowerCaseString: string = 'hello';
console.log("Test using the lower case function: I predict True.");
console.log(upperCaseString.toLowerCase() === lowerCaseString);

// Numerical tests
let num1: number = 10;
let num2: number = 5;
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
let isRaining: boolean = true;
let isCold: boolean = false;
console.log("Test using 'and' operator: I predict False.");
console.log(isRaining && isCold);
console.log("Test using 'or' operator: I predict True.");
console.log(isRaining || isCold);

// Test whether an item is in an array
let fruitsArray: string[] = ['apple', 'banana', 'orange'];
let fruitToFind: string = 'banana';
console.log("Test whether 'banana' is in the fruits array: I predict True.");
console.log(fruitsArray.includes(fruitToFind));

// Test whether an item is not in an array
let animalsArray: string[] = ['dog', 'cat', 'bird'];
let animalToFind: string = 'fish';
console.log("Test whether 'fish' is not in the animals array: I predict True.");
console.log(!animalsArray.includes(animalToFind));
