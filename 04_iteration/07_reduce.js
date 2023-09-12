//reduce(): accumelator currentvalue
const myNum = [1, 2, 3];

// const myNewNum = myNum.reduce(function (acc, curr) {
//   console.log(`acc:${acc} and curr:${curr}`);
//   return acc + curr;
// }, 0);

const myNewNum = myNum.reduce((acc, num) => acc + num, 0);
// console.log(myNewNum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
