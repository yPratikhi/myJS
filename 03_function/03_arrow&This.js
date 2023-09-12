/*
this will work only if ,it's inside the object 
-liek nested

*/
const user = {
  username: "Pratik",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Ashok";
// user.welcomeMessage();

// console.log(this); // Empty perenthesis

// Ex:1
// function chai() {
//   let username = "hitesh";
//   console.log(this.username); //undefine
// }

// Ex2
// const chai = function () {
//   let username = "Pratik";
//   console.log(this.username); //undefine
// };

//Ex3
const chai = () => {
  let username = "Pratik";
  console.log(this.username); //undefine
};

// chai();

//Arrow function
//Ex1
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//Ex2
// const addTwo = (num1, num2) => num1 + num2;

// Ex3
// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(2, 2));
