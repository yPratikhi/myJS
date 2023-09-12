//stack(primative) and heap (non-primative)
//stack
let yourName = "Pratik Yadav";
let newName = yourName;
newName = "Ashok yadav"

console.log(yourName);
console.log(newName);


//Heap
let user = {
    email:"mail@google.com",
    upi:"upi@ypl"
}

let newUser = user;
newUser.email = "pratik@google.com"

console.log(user.email);
console.log(newUser.email);