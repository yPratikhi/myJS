const setUserName = function (username) {
  this.username = username;
};

const createUser = function (username, email, password) {
  setUserName.call(this, username); //call
  this.email = email;
  this.password = password;
};

const newUser = new createUser("Pratik", "pratik@google.com", 1234);
console.log(newUser);
