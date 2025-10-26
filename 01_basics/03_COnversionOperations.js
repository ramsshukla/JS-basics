const { useDebugValue } = require("react");

let marks = "100"

// console.log(typeof marks);
// console.log(typeof(marks));


let marksinNumber = Number(marks)
// console.log(typeof marksinNumber);

let isloggedIn = true
let BooleanisloggedIn = Boolean(isloggedIn)

// console.log(BooleanisloggedIn);

// "22" => 22
//  "22abc" => NaN
//1 => true, 0=> false
// "" => false
// "abc" => true

// ******************************Operations ************************

let val = 3;
let negval = -val;
// console.log(negval);

// console.log("1" + 3 + 2); 132
// console.log(1 + 3 + "2"); 42
// Converts rest of the part according to the first data type assigned.


let a = 3;
let b = a++;

console.log(`a: ${a}, b: ${b}`);
let x = 3;
let y = ++x;

console.log(`x: ${x}, y: ${y}`);

//  ********* Prefix increments value before usage.
//  ********* Postfix increments value after usage.
