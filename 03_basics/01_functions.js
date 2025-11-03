// FUnctions is a set of instructions or code.

function sayMyName(){ // Basic structure.
    console.log("R");
    console.log("A");
    console.log("M");
    
}

// sayMyName  // Reference of a function.
// sayMyName() // Calling a function.

// function addTwoNumbers(num1, num2){ // while defining functions these called parameters.
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(4,5); //while calling functions these  called arguements.

//   console.log('REsult: '. result);

  //This will show undefined because we haven't return anything from funcion. 
  // Return is last statement of function after that nothing is executed.

function addTwoNumbers(num1, num2){ // while defining functions these called parameters.
    return num1 + num2
}
  
const result = addTwoNumbers(4, 5) //while calling functions these  called arguements.

//   console.log('REsult: ', result);

  function loginUserMessage(username = 'user'){
        return `${username} just Logged in!`
  }

//   console.log(loginUserMessage("Ram"));
//   console.log(loginUserMessage());
  

// function calculateCartPrice(num1){
//     return num1;
// }

// ??Rest operator 
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(3,4,5,6,7,7));

const usr = {
    name: "ram",
    price: 10000    
}

function handleObj(obj){
    console.log(`Username is ${obj.name} and Price is ${obj.price}`)
    
}

handleObj(usr);
handleObj({
    name: "sam",
    price: 123 
});

const myNewArray = [200,400,600,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// GPT 

// ✅ Excellent again — you’re doing a great job building a clear, well-commented **JavaScript fundamentals guide**.
// This one covers **functions, parameters, return statements, default parameters, rest parameters, objects, and arrays**.

// Let’s go through it carefully with improvements, clarifications, and best practices 👇

// ---

// ## 🧠 **Detailed Review**

// ### 1. Function Basics

// ```js
// function sayMyName(){ 
//     console.log("R");
//     console.log("A");
//     console.log("M");
// }
// ```

// ✔️ Correct — you’ve shown how to **declare** and **call** a function.
// 🟢 **Tip:** You can add a simple note about *function reference vs invocation*, which you already mentioned:

// ```js
// sayMyName;   // Reference
// sayMyName(); // Execution
// ```

// ---

// ### 2. Function Parameters and Return Values

// ```js
// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// const result = addTwoNumbers(4, 5)
// ```

// ✔️ Perfect — this demonstrates:

// * Passing **arguments**
// * Using **parameters**
// * Returning a value

// 🟢 **Note:** You already correctly commented that if you don’t `return`, the result will be `undefined`.
// That’s an important concept for beginners.

// ---

// ### 3. Default Parameters and Template Literals

// ```js
// function loginUserMessage(username = 'user'){
//     return `${username} just Logged in!`
// }
// ```

// ✔️ Great — you’ve used **default parameter values** correctly.
// If no argument is passed, `'user'` will be used.

// 🟢 **Enhancement:** Add a check for empty string input:

// ```js
// function loginUserMessage(username = 'user'){
//   if(!username){
//     console.log("Please provide username");
//     return;
//   }
//   return `${username} just Logged in!`;
// }
// ```

// ---

// ### 4. Rest Operator (`...num1`)

// ```js
// function calculateCartPrice(...num1){
//     return num1;
// }
// ```

// ✔️ Excellent demonstration of **rest parameters** — this allows the function to accept **any number of arguments** and returns them as an array.

// 🟢 **Example Enhancement:**

// ```js
// function calculateCartPrice(...prices){
//   return prices.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(calculateCartPrice(200, 300, 400)); // 900
// ```

// ---

// ### 5. Passing Objects as Parameters

// ```js
// const usr = {
//     name: "ram",
//     price: 10000    
// }

// function handleObj(obj){
//     console.log(`Username is ${obj.name} and Price is ${obj.price}`)
// }
// ```

// ✔️ Correct — this shows how to pass **objects** to functions and access their properties.

// 🟢 **Tip:** You can use **object destructuring** directly in the function parameter:

// ```js
// function handleObj({name, price}){
//     console.log(`Username is ${name} and Price is ${price}`);
// }
// ```

// This makes it more readable.

// ---

// ### 6. Passing Arrays and Returning Values

// ```js
// const myNewArray = [200,400,600,500]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// ```

// ✔️ Correct — this clearly shows how to access and return elements from arrays.

// 🟢 **Enhancement Example:**
// You could show how to use destructuring here too:

// ```js
// function returnSecondValue([, second]){
//   return second;
// }
// ```

// ---

// ## 💡 **Suggested Additions for Completeness**

// You can add these short points for better understanding:

// ### ➤ Function Expressions vs Declarations

// ```js
// // Declaration
// function greet() {
//   console.log("Hello!");
// }

// // Expression
// const greetUser = function() {
//   console.log("Hello from expression!");
// };
// ```

// ### ➤ Arrow Functions

// ```js
// const add = (a, b) => a + b;
// console.log(add(2, 3));
// ```

// ### ➤ Immediately Invoked Function Expression (IIFE)

// ```js
// (function(){
//   console.log("IIFE runs immediately!");
// })();
// ```

// ---

// ## ✅ **Verdict**

// Your documentation is:

// * ✅ Technically correct
// * ✅ Well-commented
// * ✅ Good flow from simple to advanced
// * ✅ Covers parameters, return, default params, rest operator, object and array handling

// Only **minor improvements** suggested:

// * Add destructuring examples
// * Add a few modern patterns (arrow functions, IIFE, expression vs declaration)
// * Tiny typo fix: `// FUnctions` → `// Functions`

// ---