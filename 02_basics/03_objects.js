// We can Declare object using two methods:
// -> literal (not singleton -> Multiple Instances e.g const obj = {})
// -> COnstructor (singleton -> one of its kind when object is declared through constructors e.g object.create)


const mySym = Symbol("key1");
const JsUser = {
    name: "Ram",
    "full name": "Ram Shukla",
    [mySym]: "myKey1",
    age: 26,
    location: "ambala",
    email: "ram@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}


// console.log(JsUser.age);
// console.log(JsUser['age']);
// console.log(JsUser["full name"]);

// Get Symbol 
// console.log(JsUser[mySym]);


// Update values inside object

JsUser.email = "ram@google.com";

// You can freeze the object as well. So, that no futher changes made to object.

// Object.freeze(JsUser);
JsUser.email = "ram@chat.com";

// console.log(JsUser)

JsUser.greeting = function(){
    // console.log(`Hello User`);

    return 'Hello User';
}
JsUser.greeting2 = function(name){
    // We can use the inner values of objects using this keyword
    console.log(`Hello User ${this.name}`);

    // return 'Hello User';
}

// Note: When calling function and nothing is returned from that function then it show undefined.JsUser
console.log(JsUser.greeting());
console.log(JsUser.greeting2());




// ???????????????????????????? GPT given explanation


// Excellent work — your code and explanation show a **solid understanding** of JavaScript objects 👏

// Let’s review it carefully line by line. I’ll highlight what’s ✅ correct, ⚠️ slightly off, and 💡 can be improved for clarity.

// ---

// ## ✅ **What’s Correct**

// ### ✅ Object creation methods

// You correctly explained:

// * **Object literal** → `const obj = {}` → *not singleton*
// * **Constructor** (e.g. `Object.create()`) → *singleton-style pattern*

// 👍 Note: in JavaScript, "singleton" isn’t strictly enforced — `Object.create()` just creates a new object with a given prototype, but your explanation’s intent (“unique instance”) is fine for conceptual understanding.

// ---

// ### ✅ Symbol usage

// ```js
// const mySym = Symbol("key1");
// [mySym]: "myKey1",
// ```

// Perfect — you’re correctly using a computed property name with a Symbol key.
// ✅ `JsUser[mySym]` will access the value.

// ---

// ### ✅ Accessing values

// All of these are right:

// ```js
// JsUser.age
// JsUser['age']
// JsUser["full name"]
// JsUser[mySym]
// ```

// ---

// ### ✅ Updating values

// ```js
// JsUser.email = "ram@google.com";
// ```

// Correct way to update object property values.

// And yes, `Object.freeze()` will prevent modifications after freezing — correct explanation.

// ---

// ### ✅ Methods inside object

// You defined methods like:

// ```js
// JsUser.greeting = function() { ... }
// JsUser.greeting2 = function(name) { ... }
// ```

// and used `this.name` — ✅ correct use of `this` to access object properties inside methods.

// ---

// ## ⚠️ **Minor Corrections / Improvements**

// ### ⚠️ In `greeting` function

// You wrote:

// ```js
// // console.log(`Hello User ${user}`);
// return 'Hello User';
// ```

// There’s no variable named `user` — so if you ever uncommented this, it would throw an error.

// ✅ **Fix:**

// ```js
// console.log(`Hello User ${this.name}`);
// ```

// or just return without console log (depending on your intent).

// ---

// ### ⚠️ Clarify "singleton" explanation

// Small note for precision:

// > “Constructor (singleton -> one of its kind when object is declared through constructors e.g object.create)”

// 💡 Better phrasing:

// > “Objects can be created via constructors (like `Object.create()`), which can control prototypes and allow more structured object creation. The term *singleton* refers to a design pattern — JavaScript doesn’t enforce single instances by default.”

// So, `Object.create()` doesn’t itself create a singleton, it just sets a prototype.

// ✅ Example for conceptual clarity:

// ```js
// const anotherUser = Object.create(JsUser);
// ```

// Now `anotherUser` inherits from `JsUser`.

// ---

// ### ⚠️ Function return logging

// You wrote:

// ```js
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());
// ```

// Since `greeting2` doesn’t have a `return`, it prints `undefined` — you already mentioned that in your comment, which is **correct**.
// Just note: `greeting2` logs to console internally, while `greeting` returns a string.

// ---

// ## 💡 Optional Enhancements

// 1. Add an example showing how to **add or delete** properties:

//    ```js
//    JsUser.phone = "9999999999";
//    delete JsUser.isLoggedIn;
//    ```

// 2. You can demonstrate **Object.freeze()** effect clearly:

//    ```js
//    Object.freeze(JsUser);
//    JsUser.age = 30;
//    console.log(JsUser.age); // still 26
//    ```

// 3. Maybe show **Object.keys / values / entries**:

//    ```js
//    console.log(Object.keys(JsUser));
//    console.log(Object.values(JsUser));
//    console.log(Object.entries(JsUser));
//    ```

// ---
