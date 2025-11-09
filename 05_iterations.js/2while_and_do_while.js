// let index = 1;
// while (index <= 10) {
//     console.log(`Value of Index is ${index}`);
//     index++;
// }


// let heroes = ['superman', 'flash', 'Ironman']
// let arr = 0;
// while (arr < heroes.length) {
//     console.log(`Values is ${heroes[arr]}`);
//     arr = arr + 1;
// }


let score = 11
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);




//++++++++++++++++++++++ NOTE

//  we often refer to loops using two different control structures. The 'for' and 'while' loops are what we call 'entry control loops' because they check the condition before entering the loop. On the other hand, 'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once before checking the condition.











//////////////////////+++++++++++++++++++++ GPT

// 🧠 JavaScript: while and do...while Loops
// 🔹 1. while Loop

// The while loop executes a block of code as long as the condition is true.

// ✅ Type: Entry Control Loop (condition is checked before execution)
// ✅ Use Case: When you don’t know how many times you’ll loop, but you know the stopping condition.

// 🧩 Syntax
// while (condition) {
//   // code to execute
// }

// 🧩 Example 1 — Basic while loop
// let index = 1;

// while (index <= 10) {
//   console.log(`Value of Index is ${index}`);
//   index++;
// }


// ✅ Output:

// Value of Index is 1
// Value of Index is 2
// ...
// Value of Index is 10


// 🧠 Explanation:

// index starts from 1.

// Condition index <= 10 is checked before each iteration.

// The loop stops once index becomes 11.

// 🧩 Example 2 — Looping through an Array
// let heroes = ['superman', 'flash', 'Ironman'];
// let arr = 0;

// while (arr < heroes.length) {
//   console.log(`Value is ${heroes[arr]}`);
//   arr = arr + 1;
// }


// ✅ Output:

// Value is superman
// Value is flash
// Value is Ironman


// 🧠 Explanation:

// The loop runs until the index (arr) reaches heroes.length.

// Commonly used when looping through lists dynamically.

// 🔹 2. do...while Loop

// The do...while loop executes the code block at least once,
// and then checks the condition to decide whether to continue.

// ✅ Type: Exit Control Loop (condition is checked after the first execution).
// ✅ Use Case: When you want to guarantee that the loop body runs at least once regardless of condition.

// 🧩 Syntax
// do {
//   // code to execute
// } while (condition);

// 🧩 Example 3 — Basic do...while loop
// let score = 11;

// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);


// ✅ Output:

// Score is 11


// 🧠 Explanation:

// The condition score <= 10 is false initially.

// Still, the loop executes once before checking the condition.

// Hence, "Score is 11" is printed one time.

// ⚖️ 3. Comparison Between while and do...while
// Feature	while Loop	do...while Loop
// Condition Check	Before execution	After execution
// Minimum Executions	0 (if condition false)	1 (always runs once)
// Type	Entry Control Loop	Exit Control Loop
// Common Use	When you want to test before executing	When you must execute at least once
// 🧩 Example — Comparison Demo
// // While loop (won’t run)
// let x = 11;
// while (x <= 10) {
//   console.log("While loop executed");
// }

// // Do-while loop (runs once)
// do {
//   console.log("Do-while loop executed");
// } while (x <= 10);


// ✅ Output:

// Do-while loop executed


// 🧠 Explanation:

// In the while loop, condition is false, so code never executes.

// In the do...while loop, code runs once before checking the condition.

// 🧩 4. Summary Note
// // ++++++++++++++++++++++ NOTE ++++++++++++++++++++++

// // 'for' and 'while' are ENTRY CONTROL LOOPS
// // - They check the condition BEFORE entering the loop body.

// // 'do...while' is an EXIT CONTROL LOOP
// // - It executes the loop body AT LEAST ONCE
// //   before checking the condition.

// ✅ Final Polished Code
// // Example 1: Basic while loop
// let index = 1;
// while (index <= 10) {
//   console.log(`Value of Index is ${index}`);
//   index++;
// }

// // Example 2: Looping through an array using while
// let heroes = ['superman', 'flash', 'Ironman'];
// let arr = 0;
// while (arr < heroes.length) {
//   console.log(`Value is ${heroes[arr]}`);
//   arr++;
// }

// // Example 3: do...while loop
// let score = 11;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);

// // ++++++++++++++++++++++ NOTE ++++++++++++++++++++++
// // 'for' and 'while' = Entry Control Loops (condition checked first)
// // 'do...while' = Exit Control Loop (runs at least once before checking)


// ✅ Output:

// Value of Index is 1
// ...
// Value is superman
// Value is flash
// Value is Ironman
// Score is 11
