const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map((num) => num + 10)

const newNums = myNumers.map((num) => num * 10)
                .map((num) => num+1)
                .filter((num) => num >= 40)

console.log(newNums);


/////////////////////++++++++++++++++ GPT

// 🧠 JavaScript: map() and Method Chaining
// 🔹 1. The map() Method

// The map() method creates a new array by performing a function on each element of the original array.

// ✅ It does not modify the original array.
// ✅ It returns a new transformed array.

// 🧩 Example 1 — Simple Mapping
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

// console.log(newNums);


// ✅ Output:

// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// 🧠 Explanation:

// Each value is transformed by the callback function.

// A new array is returned, original stays intact.

// 🔹 2. Chaining map() and filter()

// Since map() returns a new array, you can chain multiple higher-order methods like map(), filter(), and reduce().

// 🧩 Example 2 — Method Chaining
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers
//   .map((num) => num * 10)   // multiply each number by 10
//   .map((num) => num + 1)    // add 1 to each result
//   .filter((num) => num >= 40); // keep only numbers >= 40

// console.log(newNums);


// ✅ Output:

// [41, 51, 61, 71, 81, 91, 101]


// 🧠 Explanation:

// map((num) => num * 10) → [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// map((num) => num + 1) → [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

// filter((num) => num >= 40) → [41, 51, 61, 71, 81, 91, 101]

// Each step returns a new array, which is then used by the next method.

// 🧩 3. Key Points
// Feature	map()	filter()
// Purpose	Transform elements	Select elements
// Return Type	New array (same length)	New array (shorter or equal length)
// Modifies Original?	❌ No	❌ No
// Chaining Supported?	✅ Yes	✅ Yes
// Returns	Transformed values	Values that match condition
// 🧠 4. Common Use Cases of map()

// Transforming data (e.g., converting numbers, formatting text).

// Extracting specific properties from an array of objects.

// Chaining with filter() or reduce() for data processing pipelines.

// 💡 Example — Extracting from Objects
// const users = [
//   { name: "Ram", age: 25 },
//   { name: "John", age: 30 },
//   { name: "Amit", age: 22 },
// ];

// const userNames = users.map((user) => user.name);
// console.log(userNames);


// ✅ Output:

// ["Ram", "John", "Amit"]

// ✅ Final Polished Code
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Single map example
// const addTen = myNumbers.map((num) => num + 10);
// console.log("After +10:", addTen);

// // Chained map and filter example
// const newNums = myNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log("Chained Result:", newNums);


// ✅ Output:

// After +10: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// Chained Result: [41, 51, 61, 71, 81, 91, 101]