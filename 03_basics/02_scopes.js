let a = 10;  //global scope


if(true){
    let a = 1000; //block scope
    // console.log('block scope:', a);
// const b = 20;
// var c = 30
}

// console.log('global scope:', a);
// // console.log(b);
// console.log(c);

// only var c can be used outside scope


function one(){
    const usrname = "ram";

    function two(){
        const website = "youtube";
        console.log(usrname);
    }
    // console.log(website);
    two();
}

// one()



if(true){
    const username = "ram ";
    if(username === "ram "){
        const age = 25;
        console.log(username + age);
        
    }
    // console.log(age);
}

// console.log(username);
// ++++++++++++++++++++++++++++++++++ Interesting
console.log(addOne(5))
function addOne(num){
    return num + 1
}
// console.log(addOne(5))
console.log(addTwo(2))
const addTwo = function(num){   // Expression. THe diff between two is that we can access the function before initialization when using first step.
    return num + 2                // while we can't access in 2nd one before initialization we encounter this error 
}                               //"ReferenceError: Cannot access 'addTwo' before initialization"

// console.log(addTwo(2))

//////////////////////////////// NOTE /////////////////
// In Short

// Hoisting = JavaScript moving declarations to the top of their scope during compilation.

// Functions → fully hoisted

// var → hoisted but initialized as undefined

// let & const → hoisted but stay in TDZ (not accessible until declared)


// ---------------------------- GPT documentation 

// 💯 Excellent again — you’re covering **JavaScript scoping**, **lexical environments**, and **hoisting** — three of the most misunderstood yet core JS concepts.

// Your example is great for learners. Let’s walk through it carefully and fine-tune the **concept explanations** + clarify a couple of tricky points 👇

// ---

// ## ✅ **Section-by-Section Review**

// ### 1. **Scope: Global, Block, and Function**

// ```js
// let a = 10; // global scope

// if (true) {
//   let a = 1000; // block scope
//   // const b = 20;
//   // var c = 30;
// }

// // console.log('global scope:', a);
// // console.log(b);
// // console.log(c);
// ```

// ✅ **Correct Concepts:**

// * `let` and `const` are **block scoped** (only accessible inside `{}`).
// * `var` is **function scoped**, not block scoped — so it leaks out of `if` blocks.

// 🟢 **Tip:**
// To make it crystal clear for documentation readers, add a quick output reference:

// ```js
// let a = 10;
// if (true) {
//   let a = 1000;
//   var c = 30;
//   console.log("Inside block:", a); // 1000
// }
// console.log("Outside block:", a); // 10
// console.log(c); // 30 (var is function/global scoped)
// ```

// ✅ Explanation is absolutely right — only `var c` can be used outside the block.

// ---

// ### 2. **Lexical Scope (Nested Functions)**

// ```js
// function one() {
//   const usrname = "ram";

//   function two() {
//     const website = "youtube";
//     console.log(usrname);
//   }
//   // console.log(website);
//   two();
// }

// // one();
// ```

// ✅ **Perfect demonstration of lexical scope:**
// Inner functions can access variables from their **outer scope**, but not vice-versa.

// 🟢 **Clarify**:

// * `two()` can access `usrname`
// * `one()` cannot access `website`

// 💡 You can note:

// > Functions create a new lexical scope. Inner functions can “see” variables defined in their outer scope because of the closure mechanism in JavaScript.

// ---

// ### 3. **Nested `if` blocks and Scope Visibility**

// ```js
// if (true) {
//   const username = "ram ";
//   if (username === "ram ") {
//     const age = 25;
//     console.log(username + age); // ram 25
//   }
//   // console.log(age); // Error
// }

// // console.log(username); // Error
// ```

// ✅ **Perfect** — this shows **block scoping** and visibility inside nested `if` statements.
// Only the innermost block has access to both `username` and `age`.
// You clearly demonstrated where it fails — good job.

// ---

// ### 4. **Hoisting and Function Types**

// ```js
// console.log(addOne(5));
// function addOne(num) {
//   return num + 1;
// }

// console.log(addTwo(2));
// const addTwo = function (num) {
//   return num + 2;
// };
// ```

// ⚠️ **Important Distinction:**

// ✅ `function addOne()`
// → **Function Declaration** → **Hoisted** completely to the top of its scope.
// You can call it **before** its definition.

// ⚠️ `const addTwo = function()`
// → **Function Expression** → Not hoisted.
// You get **ReferenceError: Cannot access 'addTwo' before initialization**.

// 🟢 **Clear summary for your notes:**

// | Type                 | Example                       | Hoisted?                                   | Can Call Before Definition? |
// | -------------------- | ----------------------------- | ------------------------------------------ | --------------------------- |
// | Function Declaration | `function addOne() {}`        | ✅ Yes                                      | ✅ Yes                       |
// | Function Expression  | `const addTwo = function(){}` | ⚠️ Partially (variable hoisted, value not) | ❌ No                        |
// | Arrow Function       | `const addThree = () => {}`   | ⚠️ Partially                               | ❌ No                        |

// ---

// ### 🧠 **Extra Tip for Your Notes**

// If you want to show how **lexical scope & hoisting** tie together:

// ```js
// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x); // accessible due to closure
//   }

//   return inner;
// }

// const fn = outer();
// fn(); // still remembers x even after outer() finished
// ```

// This helps demonstrate how **closures** keep scope alive even after the outer function returns.

// ---

// ## 🧩 **Summary for Your Documentation**

// ✅ **Concepts Covered (All Correct):**

// * Block vs Function vs Global Scope
// * `var`, `let`, and `const` behavior
// * Lexical scoping (nested functions)
// * Optional chaining of `if` scopes
// * Function Declaration vs Expression
// * Hoisting and execution order

// ⚙️ **Minor Enhancements:**

// * Add actual `console.log()` outputs in comments for clarity.
// * Rename “singleton” references in earlier notes to “unique instance” or “object instance” (for conceptual precision).
// * Add a small **closure example** (optional but valuable).

// ---

// ### ✅ **Verdict**

// | Area                 | Status | Comment                                                      |
// | -------------------- | ------ | ------------------------------------------------------------ |
// | Variable Scoping     | ✅      | Correct with clear example                                   |
// | Lexical Scope        | ✅      | Correct & well explained                                     |
// | Nested `if` Scope    | ✅      | Demonstrates block isolation properly                        |
// | Hoisting Difference  | ✅      | Accurately shown                                             |
// | Syntax & Readability | ⚙️     | Great, just add final comments showing actual console output |

