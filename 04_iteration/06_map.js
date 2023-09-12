const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNum = myNum.map((num) => num + 10);

//Chaning of loop
const myNewNum = myNum
  .map((num) => num * 10)
  .map((num) => {
    return num + 1;
  })
  .filter((num) => num >= 40);
console.log(myNewNum);
