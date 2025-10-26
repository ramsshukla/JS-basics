// DataTypes =>
//     1. Primitive => Call By value means when assigned or copy only copy of these given not the actual one.
            // So, that means if you did any changes it would not reflect back in oriignal one.

            // 1. string
            // 2. Number
            // 3. bigint
            // 4. null
            // 5. undefined
            // 6. sympbol
            // 7. Boolean

//     2. Non-Primitive => (Reference Type) Call by reference. THe reference of these are allocated not the copy.
            // 1. Array
            // 2. Objects
            // 3. FUnctions


//             Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// Javascript is Dynamically Typed Language. Because data type will automatically assigned at the time of compilation or code execution.


// Examples:

const id = Symbol(123);
const anotherid = Symbol(123);

// console.log(id === anotherid);

// Non-Primitive Data types:

const arr = [1,2,3];

let obj = {
    name: 'abc',
    age: 22
}
const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);