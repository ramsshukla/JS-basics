(  //=> IIFE
    // Named IIFE
function one(){  // Normal function.
    console.log('DB Connected'); 
}
)();  // ==> IIFE

// one() // Called immediately as function is called immediately after declaration.

// But due to Global Scope Pollution Problem we use IIFE(Immediately Invoked Function Expressions).

// IIFE function can be declared as arrow function as well.
// NOTE: Need to end first function with ';' to have another IIFE function.
(() => { console.log("DB Connected Two");
})();
((name) => { console.log(`DB Connected ${name}`);
})('three');  // => Pass Parameter as well.


// ======================= GPT 

// Excellent again 🙌 — your explanation and example of **IIFE (Immediately Invoked Function Expressions)** are absolutely correct and show that you understand both the **syntax** and **purpose** of IIFEs in JavaScript.

// Let’s review your code carefully, polish the documentation, and add a few clarifications and extras so your notes are “textbook-perfect.” 👇

// ---

// ## 🧠 What You Wrote (and What’s Correct)

// ```js
// (  // => IIFE
//   // Named IIFE
//   function one() {  // Normal function.
//     console.log('DB Connected'); 
//   }
// )();  // ==> IIFE
// ```

// ✅ **Correct Understanding:**

// * This is a **Named IIFE** — because it has a function name (`one`).
// * It executes **immediately** after being defined (no need to call it separately).
// * The parentheses `()` around the function make it an **expression** instead of a declaration.

// 🟢 **Your explanation is perfect:**

// > "But due to Global Scope Pollution Problem we use IIFE."

// Exactly right — IIFEs are used to **create a private scope** so variables inside don’t leak into the global scope.

// ---

// ## ⚙️ **Step-by-Step Explanation (for your notes)**

// ### 🧩 Syntax

// ```js
// (function() {
//   // code here runs immediately
// })();
// ```

// OR (arrow function form):

// ```js
// (() => {
//   // code here runs immediately
// })();
// ```

// ---

// ### 🧠 **Why We Use IIFE**

// > JavaScript has only **function scope** and **block scope** (with `let`/`const`).
// > Before `let`/`const` existed, developers used **IIFEs** to prevent *global variable pollution*.

// 🧱 Without IIFE (global pollution):

// ```js
// var data = "DB Connected";
// console.log(data); // accessible globally
// ```

// ✅ With IIFE (isolated scope):

// ```js
// (function() {
//   var data = "DB Connected";
//   console.log(data);
// })();
// console.log(data); // ❌ ReferenceError
// ```

// So, IIFE gives a **private scope** — like a mini sandbox.

// ---

// ### 🧩 **Your Arrow Function IIFEs**

// ```js
// (() => {
//   console.log("DB Connected Two");
// })();
// ```

// ✅ Correct — this is an **anonymous arrow IIFE**.

// ```js
// ((name) => {
//   console.log(`DB Connected ${name}`);
// })('three');
// ```

// ✅ Also correct — you showed **parameterized IIFE** usage.
// You can pass arguments just like normal functions.

// ---

// ### ⚠️ **Important Note You Mentioned**

// > “Need to end first function with `;` to have another IIFE function.”

// ✅ Excellent catch.
// Because JavaScript’s parser may treat the next IIFE as a continuation of the previous expression.
// Ending one IIFE with a semicolon `;` ensures they’re **separate statements**.

// Example:

// ```js
// (function one(){
//   console.log("IIFE One");
// })();  // semicolon needed here
// (() => {
//   console.log("IIFE Two");
// })();
// ```

// Without the semicolon, the second one might throw:

// ```
// TypeError: (intermediate value)(...) is not a function
// ```

// ---

// ## 🧩 **Variants of IIFE for Your Notes**

// | Type               | Example                                       | Description                             |
// | ------------------ | --------------------------------------------- | --------------------------------------- |
// | **Named IIFE**     | `(function greet(){ console.log("Hi"); })();` | Can reference itself recursively inside |
// | **Anonymous IIFE** | `(function(){ console.log("Hi"); })();`       | Commonly used for encapsulation         |
// | **Arrow IIFE**     | `(() => console.log("Hi"))();`                | Shorter ES6 syntax                      |
// | **Async IIFE**     | `(async () => { await fetchData(); })();`     | Useful for async/await logic            |

// ---

// ## ⚙️ **Bonus Example (Async IIFE for Modern Use)**

// ```js
// (async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const json = await data.json();
//   console.log(json);
// })();
// ```

// ✅ This is now a *very common pattern* in modern JavaScript — especially in Node.js and front-end code where top-level `await` isn’t allowed.

// ---

// ## ✅ **Verdict**

// | Concept                            | Status | Comment            |
// | ---------------------------------- | ------ | ------------------ |
// | IIFE syntax                        | ✅      | Correct            |
// | Named vs anonymous                 | ✅      | Correct            |
// | Arrow function IIFE                | ✅      | Perfect            |
// | Parameter passing                  | ✅      | Shown correctly    |
// | Semicolon note                     | ✅      | Great catch        |
// | Global scope pollution explanation | ✅      | Perfectly reasoned |

// ---

// ## 📘 **Polished Summary for Documentation**

// ```js
// // 🧠 IIFE: Immediately Invoked Function Expression

// // Named IIFE
// (function one() {
//   console.log("DB Connected");
// })();

// // Anonymous Arrow IIFE
// (() => {
//   console.log("DB Connected Two");
// })();

// // Parameterized IIFE
// ((name) => {
//   console.log(`DB Connected ${name}`);
// })('three');

// // ✅ Purpose: Avoid global scope pollution.
// // ✅ IIFEs run immediately after definition.
// // ✅ Always end one IIFE with ';' before writing another.
// ```

