// const tinderUser = new Object(); //singleton Object

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Ashok"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:'some@gmail.com',
    fullname:{
        userFullname:{
            firstname:"Pratik",
            lastname:"Yadav"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = {...obj1,...obj2,...obj3}; //spread
// console.log(obj4);

const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

// console.log(user[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //show only keys -  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//show only values inside keys - [ '123abc', 'Ashok', false ]
// console.log(Object.entries(tinderUser));//'[]'add keys and value - [ [ 'id', '123abc' ], [ 'name', 'Ashok' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check the keys is present or not


const cource = {
    courceName:"Js in Hindi",
    price:"999",
    courceInstructor:"Pratik"
}

const{courceInstructor:instructor}=cource; //easy way asscess

// console.log(instructor);

//JSon Formate
// {
//     "name":"Pratik",
//     "coursename":"JS in Hindi",
//     "price":"Free",
// }

[
    {},
    {},
    {}
]



