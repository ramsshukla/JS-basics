const myarr = [1, 2, 3, 4, 5];

let myarr2 = new Array(1,2,3,4,5);

console.log(typeof myarr);
// console.log(myarr2);

// ---------------------Array methods
// myarr.push(9);
// myarr.push(6);
// myarr.pop();

// myarr.unshift(7);
// myarr.shift();


// TO check if array includes the given element or not , Result: boolean
// console.log(myarr.includes(7)); // output: false

//returns the index of element if it exists in array, Result: Number
// console.log(myarr.indexOf(5)); // Output: 5
// console.log(myarr.indexOf(12)); // Output: -1 Given element not exists in array.

// ------------------ SLice or splice
// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

// ************** In Slice the second arguement is the index of the element upto which you want to remove. but that element is exclusive.
// ************** In splice second value is count of the values to delte from an array.
console.log("A", myarr);

let mynArr = myarr.slice(1,3);
console.log('Result of slice', mynArr);
console.log(myarr);
let myn1 = myarr.splice(1, 3);
console.log('Result of splice', myn1);

console.log(myarr);