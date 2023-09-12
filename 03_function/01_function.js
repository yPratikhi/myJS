// function addNum(num1,num2){
//     console.log(num1 + num2);
// }

// console.log(addNum(3,2));

function addNum(num1, num2) {
  // let result = num1+num2;
  // return result

  return num1 + num2;
}

// console.log(addNum(2,3));

function loginUserMessage(username = "Ashok") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} Just logged in`;
}

// console.log(loginUserMessage('Pratik'));

// Rest
function calculateCartPrice(val1, val2, ...number1) {
  return number1;
}

// console.log(calculateCartPrice(200,400,500,2000));//[500,2000] because remaning value store inside val1 val2

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.prices}`
  );
}

// handleObject(user);
handleObject({
  username: "Pratik",
  prices: 299,
});

const myNewArrays = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArrays));
console.log(returnSecondValue([200, 400, 100, 600]));
