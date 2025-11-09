

// For of

// const arr = [1, 2, 3, 4, 5]

// for (const element of arr) {
//     console.log(element);
    
// }

// const greetings = "Hello World"

// for (const greeting of greetings) {
    
//     if(greeting == " "){

//         continue;
//     }
//     console.log(`Each Char of String ${greeting}`);
// }


//Maps   holds key-value pair and should have unique key name value can be same.

const map = new Map();
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')  

for (const [key, val] of map) {
    console.log(key, '-', val)
}

// const myObj = {
//     game1: 'NFS',
//     game2: 'GTA',
// }

// for (const [key, val] of myObj) {
//     console.log(key, '-', val)     // Object is not iteratable.
// }



///////////// +++++++++++++++++++++ GPT

// 🧠 JavaScript: for...of Loop and Map
// 🔁 for...of Loop

// The for...of loop is used to iterate over iterable objects such as:

// Arrays

// Strings

// Maps

// Sets

// Unlike for...in (which loops over keys in objects),
// for...of directly gives you the values of an iterable.

// 🧩 Example 1 — Iterating over Arrays
// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//   console.log(element);
// }


// ✅ Output:

// 1
// 2
// 3
// 4
// 5

// 🧩 Example 2 — Iterating over Strings
// const greetings = "Hello World";

// for (const greeting of greetings) {
//   if (greeting === " ") {
//     continue; // Skip spaces
//   }
//   console.log(`Each Char of String: ${greeting}`);
// }


// ✅ Output:

// Each Char of String: H
// Each Char of String: e
// Each Char of String: l
// Each Char of String: l
// Each Char of String: o
// Each Char of String: W
// Each Char of String: o
// Each Char of String: r
// Each Char of String: l
// Each Char of String: d

// 🧭 Map in JavaScript

// A Map holds key–value pairs.
// Keys in a Map are unique, but values can be duplicated.

// A Map remembers the original insertion order of the keys.

// 🧩 Creating and Using a Map
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');

// 🧩 Iterating Over a Map with for...of
// for (const [key, val] of map) {
//   console.log(key, '-', val);
// }


// ✅ Output:

// IN - India
// USA - United States of America
// FR - France

// ⚠️ Important: Objects Are Not Iterable
// const myObj = {
//   game1: 'NFS',
//   game2: 'GTA',
// };

// for (const [key, val] of myObj) {
//   console.log(key, '-', val);
// }


// ❌ Error:

// TypeError: myObj is not iterable


// 🧠 Explanation:

// for...of works only on iterable objects like arrays, maps, sets, or strings.

// Regular JavaScript objects are not iterable by default.

// To iterate over an object, use:

// for...in

// Object.keys()

// Object.entries()

// ✅ Correct Way to Iterate Over Object
// const myObj = {
//   game1: 'NFS',
//   game2: 'GTA',
// };

// for (const [key, val] of Object.entries(myObj)) {
//   console.log(key, '-', val);
// }


// ✅ Output:

// game1 - NFS
// game2 - GTA

// 🧩 Summary
// Type	Works With	Returns	Example
// for...of	Arrays, Strings, Maps, Sets	Values	for (const val of arr)
// for...in	Objects	Keys	for (const key in obj)
// ⚙️ Quick Comparison
// Loop	Used For	Accesses	Example
// for...of	Iterables (arrays, strings, maps)	Values	for (let val of arr)
// for...in	Objects	Keys	for (let key in obj)
// forEach()	Arrays only	Value + Index + Array	arr.forEach(val => ...)
// ✅ Final Clean Code (For GitHub File)
// // for...of Examples

// // Example 1: Array
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//   console.log(element);
// }

// // Example 2: String
// const greetings = "Hello World";
// for (const greeting of greetings) {
//   if (greeting === " ") continue;
//   console.log(`Each Char of String: ${greeting}`);
// }

// // Example 3: Map
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');

// for (const [key, val] of map) {
//   console.log(key, '-', val);
// }

// // Example 4: Object (not directly iterable)
// const myObj = {
//   game1: 'NFS',
//   game2: 'GTA',
// };

// // Correct way to iterate over object
// for (const [key, val] of Object.entries(myObj)) {
//   console.log(key, '-', val);
