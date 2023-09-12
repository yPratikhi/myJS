//arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); //change the type to string value
// console.log(typeof newArr);

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

/*

A  [0, 1, 2, 3, 4, 5, 6]

[ 1, 2 ]
B  [0, 1, 2, 3, 4, 5, 6]

C  [ 0, 4, 5, 6 ]
[ 1, 2, 3 ]

*/
