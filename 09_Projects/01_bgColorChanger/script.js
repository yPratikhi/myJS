const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervals;
const startChanging = function () {
  if (!intervals) {
    intervals = setInterval(changeColor, 1000);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChanging = function () {
  clearInterval(intervals);
  intervals = null;
};

document.querySelector("#start").addEventListener("click", startChanging);
document.querySelector("#stop").addEventListener("click", stopChanging);
