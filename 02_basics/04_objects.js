const instaUser =  new Object(); // also returns {} same just this is singleton
// const instaUser = {}; And this one is Non-singleton;


instaUser.id = "123abc"
instaUser.name = "john"
instaUser.isLoggedIn = false


const reguralUser = {
    'email': "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Ram",
            lastname: "Shukla"
        }
    }
}

// console.log(reguralUser.fullname.userfullname.firstname);
// Optional chaining
// console.log(reguralUser.fullname?.user?.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);

// when joining two object using above method all the values from other object or say obj2 in this case will be carry forwarded in obj1. That's why we use {} in first place of object.assign to avoid any conflict after assign multiple objects.
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);
// console.log("object 1", obj1);


// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('email'));



// ???????????????????///// GPT DOcumentation

// ✅ Excellent — this is another very solid and well-documented piece of JavaScript fundamentals!
// You’ve covered **object creation**, **nesting**, **merging**, and **useful object methods** nicely.

// Let’s go through it carefully and add a few clarifications + minor improvements 👇

// ---

// ### ✅ **Code Review and Explanation**

// #### 1. Object Creation (Singleton vs Non-singleton)

// ```js
// const instaUser = new Object(); // Singleton
// // const instaUser = {}; // Non-singleton
// ```

// ✔️ Correct — `new Object()` creates a *singleton-like* object, but in practice, both behave the same except for how they’re created.
// However, note that **JavaScript objects are not truly “singleton”** in the strict design pattern sense — they are just instances of `Object`.

// 🟢 **Tip:** It’s best to use `{}` literal syntax unless you specifically need to use the constructor form.

// ---

// #### 2. Nested Objects and Optional Chaining

// ```js
// const reguralUser = {
//   email: "some@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "Ram",
//       lastname: "Shukla"
//     }
//   }
// };

// // console.log(reguralUser.fullname.userfullname.firstname);
// console.log(reguralUser.fullname?.user?.firstname);
// ```

// ✔️ Excellent!
// You correctly used **optional chaining (`?.`)** to safely access nested properties that may not exist — prevents runtime errors like *“Cannot read property of undefined”*.

// 🟢 **Tip:** Use optional chaining and nullish coalescing (`??`) together when you want fallback values:

// ```js
// console.log(reguralUser.fullname?.user?.firstname ?? "Not available");
// ```

// ---

// #### 3. Merging Objects

// ```js
// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};

// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2};
// ```

// ✔️ Correct — both `Object.assign({}, obj1, obj2)` and the spread syntax `{...obj1, ...obj2}` create a *new merged object*.
// Using `{}` as the first argument ensures you don’t mutate `obj1`.

// 🟢 **Tip:** Spread syntax is cleaner and more modern — great choice here.

// ---

// #### 4. Object Utility Methods

// ```js
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('email'));
// ```

// ✔️ Correct and essential!
// These are among the most used object introspection methods.

// 🟢 **Extra Tip:**
// You can iterate over entries directly:

// ```js
// for (const [key, value] of Object.entries(instaUser)) {
//   console.log(`${key}: ${value}`);
// }
// ```

// ---

// ### 🧠 **Minor Enhancements to Add for Learning**

// You could add the following for completeness:

// 1. **Object Destructuring:**

//    ```js
//    const { name, isLoggedIn } = instaUser;
//    console.log(name, isLoggedIn);
//    ```

// 2. **Object.freeze() and Object.seal():**

//    ```js
//    Object.freeze(instaUser);
//    instaUser.name = "Changed"; // Won’t update

//    Object.seal(instaUser);
//    delete instaUser.id; // Won’t delete but can update existing keys
//    ```

// 3. **Looping over Object:**

//    ```js
//    for (let key in instaUser) {
//      if (instaUser.hasOwnProperty(key)) {
//        console.log(`${key}: ${instaUser[key]}`);
//      }
//    }
//    ```

// ---

// ### ✅ **Verdict**

// Your guide is **well-structured, accurate, and practical for beginners**.
// It correctly demonstrates:

// * Literal vs constructor object creation
// * Nested object access and optional chaining
// * Object merging
// * Key/value introspection
// * Property checks

// Only minor clarification: the term *singleton* is conceptually not entirely accurate here — JS doesn’t create true singleton objects by default.

// ---


// Object Destructuring
const course = {
    name: "JS in Hindi",
    price: 999,
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor, price} = course;

console.log(instructor);
console.log(price);
