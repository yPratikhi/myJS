// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encrytPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("Chai", "chai@google.com", "123");

// console.log(chai.encrytPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@google.com", "123");

console.log(tea.encrytPassword());
console.log(tea.changeUsername());
