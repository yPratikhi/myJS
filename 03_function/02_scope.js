if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); let, const inside the scope because they are not a global scope
// console.log(b);
// console.log(c);//var is a global scope we can declare inside the scope

/*
- Inside one() thir is a nested function two() 
- We can fetch the data from the one() becuse we nesting the two().
- two() can be have the data which is present inside the one().
- but we can't have the data from two() becuse of '{}'
*/
function one() {
  const username = "pratik";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "Pratik";
  if (username === "Pratik") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++Interesting+++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// In function Reference we can't follow this reference
// console.log(addTwo(4));
// const addTwo = function(num){
//     return  num + 1
// }
