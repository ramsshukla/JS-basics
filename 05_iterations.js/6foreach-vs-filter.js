// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((val) => {
//     return val;
// })

// console.log(values);

// arr.foreach  doesn't return anything.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const arrNums = []
// myNums.forEach((num) => {
//     if(num > 4) arrNums.push(num)
// })

// console.log('arrNums', arrNums);


//Filter returns


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter((book) => book.genre == "History")
userBooks = books.filter((book) => book.publish >= 1995 && book.genre == 'History')
console.log(userBooks);





//////////// ++++++++++++++++++++ GPT

// 🧠 JavaScript: forEach() vs filter()
// 🔹 1. forEach()

// The forEach() method executes a callback function for each element in an array but does not return a new array.

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((val) => {
//   return val;
// });

// console.log(values); // undefined


// ✅ Explanation:

// The forEach() loop always returns undefined.

// It’s used for side effects (e.g., logging, pushing into another array, updating values, etc.), not for data transformation.

// ⚙️ Example: Using forEach() for Conditional Logic
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrNums = [];

// myNums.forEach((num) => {
//   if (num > 4) arrNums.push(num);
// });

// console.log("arrNums:", arrNums);


// ✅ Output:

// arrNums: [5, 6, 7, 8, 9, 10]


// 🧠 Explanation:

// Here, you manually created a new array and pushed numbers > 4 into it.

// This is a manual way of doing what .filter() does automatically.

// 🔹 2. filter()

// The filter() method creates a new array with all elements that pass a test (return true in the callback function).

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);

// console.log(newNums);


// ✅ Output:

// [5, 6, 7, 8, 9, 10]


// ✅ Explanation:

// The callback returns true for values greater than 4.

// The filter() method automatically builds and returns a new array with those elements.

// The original array is not modified.

// 🧩 3. Real-world Example: Filtering Objects
// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// 🔹 Example 1 — Filter by Genre
// let userBooks = books.filter((book) => book.genre === "History");
// console.log(userBooks);


// ✅ Output:

// [
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
// ]

// 🔹 Example 2 — Filter by Multiple Conditions
// userBooks = books.filter(
//   (book) => book.publish >= 1995 && book.genre === 'History'
// );

// console.log(userBooks);


// ✅ Output:

// [
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
// ]


// 🧠 Explanation:

// The callback checks both publish year and genre.

// Only the books that satisfy both conditions are returned in the new array.

// ⚖️ forEach() vs filter()
// Feature	forEach()	filter()
// Purpose	Runs function for each element (side effects)	Creates a new filtered array
// Returns	undefined	New array
// Can break early?	❌ No	❌ No
// Mutates original array?	❌ No	❌ No
// Use Case	Logging, DOM manipulation, pushing manually	Filtering based on conditions
// ✅ Final Polished Code
// // Example 1: forEach does not return anything
// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((val) => {
//   return val;
// });
// console.log(values); // undefined

// // Example 2: Manual filtering using forEach
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrNums = [];
// myNums.forEach((num) => {
//   if (num > 4) arrNums.push(num);
// });
// console.log('arrNums:', arrNums);

// // Example 3: Using filter()
// const newNums = myNums.filter((num) => num > 4);
// console.log('newNums:', newNums);

// // Example 4: Real-world filtering with array of objects
// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((book) => book.genre === 'History');
// userBooks = books.filter(
//   (book) => book.publish >= 1995 && book.genre === 'History'
// );
// console.log(userBooks);