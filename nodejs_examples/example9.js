/*
- setTimeout is NOT an asynchronous function
- so there is no need to use await when you call it
- however, it behave likes an async function, that is the callback function, the first argument, will not be called until some time passes

In the following, we show that callback function of setTimeout is not called until 2 seconds pass.

The first argument is a callback arrow function: 
() => {
  console.log("Timeout finished");
}

*/


console.log("Before");

setTimeout(() => {
  console.log("Timeout finished");
}, 2000);

console.log("After");