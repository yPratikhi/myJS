// let myName = "Pratik    ";

// String.prototype.trueLength = function () {
//   console.log(`${this}`);
//   console.log(`True Lenght is ${this.trim().length}`);
// };

// console.log(myName.trueLength());

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.pratik = function () {
  console.log("pratik is present in all");
};

Array.prototype.heyPratik = function () {
  console.log("Pratik says Hello");
};

// heroPower.pratik();
// myHero.heyPratik();
// myHero.pratik();
// heroPower.heyPratik(); ERROR beacuse Array.prototype

/*
object --> object -> true
Array --> Array   -> true
Array --> Object  -> true
Object --> Array  -> false
*/

// Inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssigment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Ashok    ";

String.prototype.trueLength02 = function () {
  console.log(this);
  console.log(`True Length is : ${this.trim().length}`);
};

anotherUserName.trueLength02();
"pratik".trueLength02();
"Shivam".trueLength02();
