const myNums = [1, 2, 3]

// const myTOtal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0)

// const myTOtal = myNums.reduce( (acc, currVal) => acc + currVal, 0)
// console.log(myTOtal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(Total);





//////////////////++++++++++++++++++ GPT

// 🧠 JavaScript: reduce() Method
// 🔹 1. What is reduce()?

// The reduce() method executes a callback function for every element in an array, resulting in a single accumulated value.

// ✅ It’s commonly used for:

// Summation

// Product calculation

// Aggregation (like totals, averages, flattening arrays, etc.)

// ⚙️ Syntax
// array.reduce((accumulator, currentValue) => {
//   // logic here
//   return updatedAccumulator;
// }, initialValue);

// Parameters:
// Parameter	Meaning
// accumulator (acc)	Stores the running total/result
// currentValue (currVal)	Current element being processed
// initialValue	The starting value of the accumulator (optional, but recommended)
// 🧩 Example 1 — Summing Numbers
// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(myTotal);


// ✅ Output:

// 6


// 🧠 Explanation:

// Start with acc = 0

// Loop steps:

// acc = 0 + 1 = 1
// acc = 1 + 2 = 3
// acc = 3 + 3 = 6


// Returns final value 6.

// 🧩 Detailed View (with logs)
// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc}, currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

// console.log('Total:', myTotal);


// ✅ Console Output:

// acc: 0, currVal: 1
// acc: 1, currVal: 2
// acc: 3, currVal: 3
// Total: 6

// 🛒 Example 2 — Shopping Cart Total
// const shoppingCart = [
//   { itemName: "js course", price: 2999 },
//   { itemName: "py course", price: 999 },
//   { itemName: "mobile dev course", price: 5999 },
//   { itemName: "data science course", price: 12999 },
// ];

// const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(total);


// ✅ Output:

// 22996


// 🧠 Explanation:

// The callback runs for each cart item.

// acc keeps adding up each item.price.

// Starts from 0 (as initial value).

// So:

// 0 + 2999 + 999 + 5999 + 12999 = 22996

// 🔁 How reduce() Works Step-by-Step
// Step	acc	currVal	Returned
// 1	0	2999	2999
// 2	2999	999	3998
// 3	3998	5999	9997
// 4	9997	12999	22996

// ✅ Final total: 22996

// 🧠 Key Points
// Property	Description
// Returns	A single accumulated result
// Does it modify original array?	❌ No
// Needs initial value?	✅ Recommended
// Common use cases	Sum, total, average, flatten arrays, counting, grouping
// 💡 Other Examples
// Example — Multiply All Elements
// const nums = [2, 3, 4];
// const product = nums.reduce((acc, val) => acc * val, 1);
// console.log(product); // 24

// Example — Flatten Nested Arrays
// const nested = [[1, 2], [3, 4], [5, 6]];
// const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat); // [1, 2, 3, 4, 5, 6]

// ✅ Final Polished Code for GitHub
// // Example 1: Simple reduce for summing numbers
// const myNums = [1, 2, 3];

// // Detailed version with logs
// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc}, currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

// console.log('Total:', myTotal);

// // Example 2: Clean arrow function version
// const myTotalArrow = myNums.reduce((acc, currVal) => acc + currVal, 0);
// console.log('Total (arrow):', myTotalArrow);

// // Example 3: Real-world shopping cart
// const shoppingCart = [
//   { itemName: "js course", price: 2999 },
//   { itemName: "py course", price: 999 },
//   { itemName: "mobile dev course", price: 5999 },
//   { itemName: "data science course", price: 12999 },
// ];

// const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log('Cart Total:', total);


// ✅ Output:

// acc: 0, currVal: 1
// acc: 1, currVal: 2
// acc: 3, currVal: 3
// Total: 6
// Total (arrow): 6
// Cart Total: 22996
