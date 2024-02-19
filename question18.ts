// Define an array of places to visit
const placesToVisit: string[] = ["Tokyo", "Paris", "Sydney", "Berlin", "New York"];

console.log("Original order:", placesToVisit);

// spread operator (...) craetes a shallow copy of the orignal array
console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order after sorting:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order after sorting and reversing:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order after reversing again:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
