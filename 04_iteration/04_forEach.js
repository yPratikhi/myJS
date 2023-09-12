const codeing = ["js", "ruby", "java", "python", "cpp"];

//EX01
// codeing.forEach(function (item) {
//   console.log(item);
// });

//EX02
// codeing.forEach((item) => {
//   console.log(item);
// });

// EX03
// function printMe(item) {
//   console.log(item);
// }
// codeing.forEach(printMe);

//In forEach thir is index and arr
codeing.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});
//outPut
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
