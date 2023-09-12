/*
resolve(.then)
Also, resolve/reject expect only one argument (or none) and will ignore additional arguments
*/
const promiseOne = new Promise(function (resolve, reject) {
  //DO an async Task
  //DB calls,cryptography,network

  setTimeout(function () {
    console.log("Async task is complited");
    resolve(); //very imp to perform the .then task
  }, 1000);
});

//without (resolve()^)you can't perform this task
promiseOne.then(function () {
  console.log("Promise consumed");
});

//without expresstion
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async02 task is compelete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async02 resolve");
});

//resolve data
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ usename: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//Chaining of method
const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ usename: "Pratik", password: "123" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.usename;
  })
  .then((usename) => {
    console.log(usename);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promis is either resolve or rejected"));

//async and await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ usename: "javascript", password: "123" });
    } else {
      reject("Error:JS went Wrong");
    }
  }, 1000);
});

//Async and Await using try catch
async function consumePromiseFive() {
  try {
    const resolve = await promiseFive;
    console.log(resolve);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//fetch the API

// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E :", error);
//   }
// }

// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
