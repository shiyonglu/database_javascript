/*
When you create a Promise, the syntax is:
new Promise((resolve, reject) => {
  // You write your asynchronous code here
});


1) resolve:

A function that you call when the Promise's asynchronous task completes successfully.
Calling resolve(value) changes the Promise's state from pending to fulfilled and optionally passes a value to the .then() handler.

2) reject:

A function that you call if the Promise's task fails.
Calling reject(reason) changes the Promise's state from pending to rejected, and the reason is passed to the .catch() handler.

*/



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed successfully!"); // Signal success
    }, 1000); // Wait 1 second
  });
  
  myPromise.then((message) => {
    console.log(message); // Output: Task completed successfully!
  });