// const myObj = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     swift: 'Swift',
//     ruby: 'Ruby'
// }

// for (const key in myObj) {
    
//     const element = myObj[key];
//     console.log(key);
    
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

const map = new Map();
map.set('IN', 'INDIA')
map.set('USA', 'United States Of America')
map.set('FR', 'France')  


for (const key in map) {
    
 console.log(key);
 
}


// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array & MAPS  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.











//////////////++++++++++++++++++++ GPT

// 🧠 JavaScript: for...in, for...of, and forEach Loops
// 🔹 1. for...in Loop

// The for...in loop iterates over the keys (property names or indexes) of an object (or array).

// 🧩 Example 1 — Iterating Over Object
// const myObj = {
//   js: 'JavaScript',
//   cpp: 'C++',
//   swift: 'Swift',
//   ruby: 'Ruby'
// };

// for (const key in myObj) {
//   console.log(key, ':', myObj[key]);
// }


// ✅ Output:

// js : JavaScript
// cpp : C++
// swift : Swift
// ruby : Ruby


// 🧠 Explanation:

// for...in gives you the key (property name).

// You access the value using myObj[key].

// 🧩 Example 2 — Iterating Over an Array
// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const key in programming) {
//   console.log(key, ':', programming[key]);
// }


// ✅ Output:

// 0 : js
// 1 : rb
// 2 : py
// 3 : java
// 4 : cpp


// 🧠 Explanation:

// For arrays, for...in iterates over indexes (not values).

// You must use programming[key] to access each value.

// 💡 Tip:
// While for...in works on arrays, it’s not recommended — because it can include inherited properties.
// Prefer for...of or forEach for arrays.

// 🔹 2. for...of Loop

// The for...of loop iterates directly over values of iterable objects like arrays, strings, maps, and sets.

// 🧩 Example 1 — Array
// const arr = ["js", "rb", "py"];
// for (const val of arr) {
//   console.log(val);
// }


// ✅ Output:

// js
// rb
// py

// 🧩 Example 2 — Map
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');

// for (const [key, val] of map) {
//   console.log(key, '-', val);
// }


// ✅ Output:

// IN - India
// USA - United States of America
// FR - France


// ⚠️ Note:
// for...in does not work on Map objects — because maps are not enumerable, but iterable.

// ❌ Example (Incorrect)
// for (const key in map) {
//   console.log(key); // Nothing prints
// }

// 🔹 3. forEach Loop

// The forEach() method is an Array method used to execute a callback function once for each element.

// const arr = ["js", "rb", "py", "java", "cpp"];

// arr.forEach((value, index) => {
//   console.log(index, ':', value);
// });


// ✅ Output:

// 0 : js
// 1 : rb
// 2 : py
// 3 : java
// 4 : cpp


// 🧠 Notes:

// Works only with arrays.

// Automatically gives you value, index, and the full array.

// Doesn’t return a new array (unlike map()).

// 🧩 When to Use Which
// Loop Type	Works On	Iterates Over	Returns	Common Use
// for...in	Objects, Arrays	Keys / Indexes	Nothing	Objects (keys)
// for...of	Arrays, Strings, Maps, Sets	Values	Nothing	Values of iterables
// forEach()	Arrays	Values + Index	undefined	Arrays (side effects)
// ✅ Summary Explanation (your note, cleaned up)

// Use for...of for iterating over values directly from Strings, Arrays, and Maps.

// Use for...in for iterating over keys or indexes in Objects or Arrays.

// Use forEach() for looping through Arrays only, with access to both values and indexes.

// 🧩 Final Polished Code
// // for...in example with Object
// const myObj = {
//   js: 'JavaScript',
//   cpp: 'C++',
//   swift: 'Swift',
//   ruby: 'Ruby'
// };

// for (const key in myObj) {
//   console.log(key, ':', myObj[key]);
// }

// // for...in example with Array
// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) {
//   console.log(key, ':', programming[key]);
// }

// // for...of example with Map
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States Of America');
// map.set('FR', 'France');

// // ❌ for...in won't work with Map
// for (const key in map) {
//   console.log(key); // Nothing will print
// }

// // ✅ for...of works perfectly with Map
// for (const [key, val] of map) {
//   console.log(key, '-', val);
// }

// // Summary:
// // - for...of → Strings, Arrays, Maps → values
// // - for...in → Objects, Arrays → keys/indexes
// // - forEach  → Arrays → values (and index)
