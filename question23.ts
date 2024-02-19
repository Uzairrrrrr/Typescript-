let x: number = 6;
let y: number = 10;
let name1: string = 'John';
let age: number = 25;
let isStudent: boolean = true;
let fruits: string[] = ['apple', 'banana', 'orange'];
let emptyArray: string[] = [];
let person: { name: string, age: number } = { name: 'Alice', age: 30 };

console.log("Is x == 6? I predict True.");
console.log(x == 6);

console.log("Is name1 === 'John'? I predict True.");
console.log(name1 === 'John');

console.log("Is age >= 21? I predict True.");
console.log(age >= 21);

console.log("Is isStudent === true? I predict True.");
console.log(isStudent === true);

console.log("Is fruits.length > 0? I predict True.");
console.log(fruits.length > 0);

console.log("Is x != y? I predict False.");
console.log(x != y);

console.log("Is emptyArray.length === 0? I predict False.");
console.log(emptyArray.length === 0);

console.log("Is person.name === 'Alice' and person.age === 30? I predict False.");
console.log(person.name === 'Alice' && person.age === 30);

console.log("Is x === 5? I predict False.");
console.log(x === 5);

console.log("Is name !== 'john'? I predict True.");
console.log(name1 !== 'john');
