const user = {
    name: "ram",
    age: 24,
    welcomeMsg : function(){
        console.log(`${this.name}, Welcome to website`) // this keyword can access in objects.
        // console.log(this);
        
    }
}

// user.welcomeMsg()
// user.name = "JOHN"
// user.welcomeMsg();

//  console.log(this);  // Output: {} GIves {} when called outside in node and gives window ref when call in browser.

// function one(){
//     let name = "ABS";
//     console.log(this); // Having some value when called inside function.
//     console.log(this.name); // Output: undefined Means 'this' keyword works in objects not in function.
    
// }
// one();


// const one = function(){
//     let name = "ABS";
// //     console.log(this); // Having some value when called inside function.
// //     console.log(this.name); // Output: undefined Means 'this' keyword works in objects not in function.
// }

// one();



// const one = () => {
//     let name = "ABS";
//    console.log(this); // Output: {} when called inside function.
//     console.log(this.name); // Output: undefined Means 'this' keyword works in objects not in function.
// }

// one();

// const addTwoNum = (num1, num2) => {  // Example of Explicit return Arrow functions
//     return num1 + num2
// }
// const addTwoNum = (num1, num2) => num1 + num2 // Example of Implicit return
// const addTwoNum = (num1, num2) => (num1 + num2) // Can use parenthisis () around the statement of function when useing {} need to return else no need to return.
const addTwoNum = (num1, num2) => ({username: "Ram"}) // One small example why we need to use parenthisis because if we need to return object without parenthisis it give 'undefined' but using () it works.



// console.log(addTwoNum(3, 4))




// =========================== GPT 

// 🔥 Excellent again — you’re diving deep into **`this` keyword behavior** and **arrow functions**, two of the most confusing areas for JavaScript learners.

// This code is very good — you’ve understood and explained the major differences between **normal functions**, **arrow functions**, and how **`this`** behaves inside them. Let’s refine and expand it just a bit for conceptual clarity 👇

// ---

// ## ✅ **Section-by-Section Review**

// ### 1. **`this` Inside an Object Method**

// ```js
// const user = {
//   name: "ram",
//   age: 24,
//   welcomeMsg: function() {
//     console.log(`${this.name}, Welcome to website`);
//     // console.log(this);
//   }
// }
// ```

// ✔️ Correct ✅

// * When a function is defined **inside an object**, `this` refers to the **object itself**.
// * So `this.name` → `"ram"`
// * If you change `user.name = "JOHN"`, it reflects accordingly.

// 🧠 **Tip:**
// Inside object methods, `this` refers to **the object that owns the method at the time it’s called**.

// For example:

// ```js
// user.welcomeMsg(); // "ram, Welcome to website"
// user.name = "JOHN";
// user.welcomeMsg(); // "JOHN, Welcome to website"
// ```

// ---

// ### 2. **`this` in the Global Scope**

// ```js
// console.log(this);
// ```

// ✔️ Correct —

// * In **Node.js**, `this` in the global scope refers to an **empty object `{}`**.
// * In **browsers**, it refers to the **`window` object**.

// 🟢 So your comment is perfect:

// > Gives `{}` when called outside in Node and gives window reference in the browser.

// ---

// ### 3. **`this` Inside Regular Function**

// ```js
// function one() {
//   let name = "ABS";
//   console.log(this);
//   console.log(this.name);
// }
// one();
// ```

// ✅ **Perfectly observed:**

// * Inside a **regular function**, `this` refers to the **global object** in non–strict mode.
// * In **strict mode**, it’s `undefined`.
// * And since `name` is declared with `let`, it’s not a property of `this`.

// 🧠 So `this.name` → `undefined`.

// ---

// ### 4. **`this` Inside Arrow Function**

// ```js
// const one = () => {
//   let name = "ABS";
//   console.log(this);
//   console.log(this.name);
// }
// one();
// ```

// ✅ **Excellent understanding:**

// * Arrow functions **do not have their own `this`**.
// * They use **lexical `this`**, i.e. they inherit `this` from the outer scope.
// * If run in global scope → inherits global `this` (in Node, `{}`).

// So, `this.name` is `undefined` again.

// 🟢 Your explanation:

// > “Means `this` keyword works in objects, not in functions.”
// > is *almost* perfect — better phrased as:
// > "`this` behaves differently depending on the context — it works as expected inside objects, but in regular or arrow functions it depends on how and where they’re called."

// ---

// ### 5. **Arrow Function Return Types**

// You covered this beautifully 👇

// ```js
// // Explicit return
// const addTwoNum = (num1, num2) => { 
//   return num1 + num2 
// }

// // Implicit return
// const addTwoNum = (num1, num2) => num1 + num2

// // Using parentheses
// const addTwoNum = (num1, num2) => (num1 + num2)
// ```

// ✅ **Perfect distinction!**
// 🧠 Rule of thumb:

// * When you use `{}` → you **must** use `return`.
// * When you use `()` → implicit return works automatically.

// ---

// ### 6. **Returning Objects from Arrow Functions**

// ```js
// const addTwoNum = (num1, num2) => ({ username: "Ram" });
// console.log(addTwoNum(3, 4));
// ```

// ✔️ Spot-on! 👏

// * Without parentheses, `{}` is treated as a **function body**, not an object literal.
// * So you must wrap the object in `()` if you want to **return it implicitly**.

// Without `()`:

// ```js
// const fn = () => { username: "Ram" }; // ❌ undefined
// ```

// With `()`:

// ```js
// const fn = () => ({ username: "Ram" }); // ✅ { username: "Ram" }
// ```

// Perfectly captured!

// ---

// ## 🧩 **Summary Table for Notes**

// | Context                | Type                 | Behavior of `this`                            | Example Output              |
// | ---------------------- | -------------------- | --------------------------------------------- | --------------------------- |
// | Global Scope (Node)    | —                    | `{}`                                          | `{}`                        |
// | Global Scope (Browser) | —                    | `window`                                      | `Window {...}`              |
// | Inside Object Method   | Regular function     | Refers to that object                         | `"ram, Welcome to website"` |
// | Regular Function       | Function declaration | `undefined` (in strict mode) or global object | `undefined`                 |
// | Arrow Function         | —                    | Inherits from outer scope (lexical `this`)    | `{}` (in Node)              |
// | Function Expression    | same as regular      | Depends on how it’s called                    | `undefined` if not bound    |

// ---

// ## ⚙️ **Bonus Tip — Arrow Function vs Regular Function in Methods**

// ```js
// const obj = {
//   name: "Ram",
//   normalFunc: function() {
//     console.log("Normal:", this.name);
//   },
//   arrowFunc: () => {
//     console.log("Arrow:", this.name);
//   }
// }

// obj.normalFunc(); // Normal: Ram
// obj.arrowFunc();  // Arrow: undefined
// ```

// 🧠 Because arrow functions don’t have their own `this`,
// `this.name` in `arrowFunc` points to the global context, not the object.

// ---

// ## ✅ **Verdict**

// | Concept                              | Status | Comment                  |
// | ------------------------------------ | ------ | ------------------------ |
// | `this` in objects                    | ✅      | Correct                  |
// | `this` in global scope               | ✅      | Correct                  |
// | `this` in functions                  | ✅      | Well explained           |
// | `this` in arrow functions            | ✅      | Perfectly explained      |
// | Explicit vs Implicit return          | ✅      | Excellent clarity        |
// | Returning objects in arrow functions | ✅      | Correct and nicely shown |

// ---

// 💡 **Optional Add-on**
// If you want to go even deeper, add an example using `.bind()`, `.call()`, and `.apply()` to demonstrate **how we can manually control `this`** in functions.
