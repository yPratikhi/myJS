/*
getter- getter gets the data and return but imp is that
we have to use setter.
setter-setter can't return but set the 'value'

Getter and Settter works only if both are present
*/

class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}pratik`;
  }

  set password(value) {
    this._password = value;
  }
}

const pratik = new user("p@pratik.ai", "abc");
console.log(pratik.password);
