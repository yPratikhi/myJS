//object litrals
const mySym = Symbol("key1");

const JsUser = {
  name: "Pratik",
  "Full name": "Pratik Yadav", //JSON formate
  [mySym]: "mykey1", //Imp to wright in '[]'for the type of symbol
  age: 23,
  location: "Mumbai",
  email: "pratik@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monnday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
console.log(JsUser[mySym]); //type is symbol

//How change the JsUser data
JsUser.email = "pratik@chatgpt.com";
//To freeze the update in JsUser 'Object.freeze()'
// Object.freeze(JsUser);
// JsUser.email = "pratik@microsoft.com";
// console.log(JsUser);

//function Expression
JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
