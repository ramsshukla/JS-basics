// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}



/////////////////////////++++++++++++++ GPT

// 🧠 JavaScript: for Loops, Nested Loops, break, and continue
// 🔹 1. Basic for Loop

// The for loop is the most common type of loop in JavaScript.
// It runs a block of code a fixed number of times.

// 🧩 Syntax:
// for (initialization; condition; increment/decrement) {
//   // code block
// }

// Example:
// for (let i = 0; i <= 10; i++) {
//   const element = i;

//   if (element === 5) {
//     console.log("5 is the best number");
//   }

//   console.log(element);
// }


// ✅ Output:

// 0
// 1
// 2
// 3
// 4
// 5 is the best number
// 5
// 6
// 7
// 8
// 9
// 10


// 🧠 Explanation:

// i = 0 → start

// i <= 10 → condition (loop runs until false)

// i++ → increment after each iteration

// Inside the loop, a condition checks if i === 5.

// ⚠️ Scope Tip:
// If you try console.log(element) outside the loop, it will throw an error:

// console.log(element); // ❌ ReferenceError


// because element is declared using let (block-scoped).

// 🔹 2. Nested for Loops

// You can use one loop inside another to create combinations or tables.

// Example: Multiplication Table
// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


// ✅ Output (shortened):

// Outer loop value: 1
// 1 * 1 = 1
// 1 * 2 = 2
// ...
// Outer loop value: 2
// 2 * 1 = 2
// 2 * 2 = 4
// ...


// 🧠 Explanation:

// The outer loop controls the row (i).

// The inner loop runs fully for each outer iteration (j).

// Commonly used for grids, patterns, or nested data structures.

// 🔹 3. Looping Through Arrays
// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }


// ✅ Output:

// flash
// batman
// superman


// 🧠 Explanation:

// myArray.length ensures the loop runs only as long as the array.

// index starts at 0 (first element).

// Access each element with myArray[index].

// 🔹 4. break and continue Statements
// 🧱 break

// Exits the loop immediately, skipping all remaining iterations.

// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }


// ✅ Output:

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5


// 🧠 Explanation:

// Loop stops completely after reaching index === 5.

// 🌀 continue

// Skips the current iteration and continues to the next one.

// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }


// ✅ Output:

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// Value of i is 7
// ...
// Value of i is 20


// 🧠 Explanation:

// When index === 5, the loop skips that iteration and continues.

// It doesn’t exit the loop (unlike break).

// ⚖️ Comparison of break vs continue
// Statement	Effect	Example
// break	Exits the loop completely	Stop searching when found
// continue	Skips current iteration	Skip invalid or unwanted values
// ✅ Final Polished Code
// // 1. Basic for loop
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element === 5) {
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

// // 2. Nested for loops
// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// // 3. Looping through arrays
// let myArray = ["flash", "batman", "superman"];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// // 4. break example
// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

// // 5. continue example
// for (let index = 1; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }



