class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `1234`;
  }
}

const pratik = new user("Pratik");
// console.log(pratik.createId()); //because of static we can't access the id

class Teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.createId()); //static - can't access by any diff. method
