const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((key) => { console.log(key);
// })
// coding.forEach(function (key) {
//      console.log(key)
// })


// function printval(item){
//     console.log(item);
// }

// coding.forEach(printval)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (val) => {
    console.log(val.languageFileName);
    
})


//+++++++++++++++++++++ GPT

// 🧠 Concept: Higher-Order Array Loops in JavaScript

// A higher-order function is a function that either takes another function as an argument or returns a function.

// Array methods like forEach, map, filter, reduce, etc. are examples of higher-order array functions, because they accept a callback function that runs for each element.

// ⚙️ Your Code Review
// 1️⃣ Base Array Example
// const coding = ["js", "ruby", "java", "python", "cpp"];


// ✅ This is your data array containing strings (language names).

// 2️⃣ Using forEach with Arrow Function
// coding.forEach((key) => {
//   console.log(key);
// });


// ✔️ Correct — this loops through every element in the array and prints each language name.

// Output:

// js
// ruby
// java
// python
// cpp

// 3️⃣ Using forEach with Regular Function Expression
// coding.forEach(function (key) {
//   console.log(key);
// });


// ✔️ Also correct — same behavior, different syntax.
// This demonstrates that forEach can take any callback function, not just arrow functions.

// 4️⃣ Passing a Named Function
// function printval(item) {
//   console.log(item);
// }
// coding.forEach(printval);


// ✔️ Excellent use of a named callback function.
// This approach improves readability when you want to reuse the callback logic elsewhere.

// 5️⃣ Working with Array of Objects
// const myCoding = [
//   { languageName: "javascript", languageFileName: "js" },
//   { languageName: "java", languageFileName: "java" },
//   { languageName: "python", languageFileName: "py" },
// ];

// myCoding.forEach((val) => {
//   console.log(val.languageFileName);
// });


// ✅ Perfect example — this shows how to use forEach on complex data structures (arrays of objects).

// Output:

// js
// java
// py


// This pattern is widely used in real projects — e.g. iterating through API response arrays, JSON lists, or configuration files.

// 💡 What Happens Internally

// forEach takes a callback function.

// That callback automatically receives up to 3 parameters:

// array.forEach(function (element, index, array) {
//   // element → current item
//   // index → current index
//   // array → entire array
// });


// Example:

// coding.forEach((item, index, arr) => {
//   console.log(index, item, arr);
// });

// ⚠️ Key Points about forEach
// Behavior	Description
// Returns	undefined (it does not return a new array)
// Purpose	Used for side effects (logging, modifying external variables)
// Cannot Break	You can’t use break or return to exit early (use for...of or some() instead)
// Doesn’t mutate	It doesn’t change the original array unless you explicitly modify it inside the callback
// 🧩 When to Use forEach vs Others
// Method	Use When	Returns
// forEach()	You just want to perform an action on each element	undefined
// map()	You want to transform elements and create a new array	New array
// filter()	You want to keep some elements	New array
// reduce()	You want to combine values into one result	Single value
// ✅ Final Clean Code for Your Documentation
// // Higher-Order Array Loop Example: forEach()

// const coding = ["js", "ruby", "java", "python", "cpp"];

// // Using arrow function
// coding.forEach((key) => console.log(key));

// // Using function expression
// coding.forEach(function (key) {
//   console.log(key);
// });

// // Using a named function
// function printVal(item) {
//   console.log(item);
// }
// coding.forEach(printVal);

// // Array of Objects Example
// const myCoding = [
//   { languageName: "javascript", languageFileName: "js" },
//   { languageName: "java", languageFileName: "java" },
//   { languageName: "python", languageFileName: "py" },
// ];

// // Accessing object properties inside forEach
// myCoding.forEach((val) => {
//   console.log(val.languageFileName);
// });
