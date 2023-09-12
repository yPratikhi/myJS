const user = {
  username: "Hitesh",
  loginCount: 8,
  signeIn: true,

  getUserDetails: function () {
    // console.log("Got user details from the database");
    console.log(`Username: ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //shows the {}-Object

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("Pratik", 123, true);

console.log(userOne);
