// const newPromise = new Promise(function (resolve, reject) {
//   //   console.log("Runnning....");
//   resolve("done");
// });

// newPromise.then(function (user) {
//   console.log(user);
// });

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject("ERROR....");
//   }, 2000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Resolve and reject run perfectly"));
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => console.log("Resolve 3000"), ms);
  });
}

delay(3000).then((result) => console.log(result));
