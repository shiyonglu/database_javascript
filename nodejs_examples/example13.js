/* 
In this example, we use the returning a promise to define an async function 

*/


// Function that returns a Promise for a delayed greeting
function delayedGreetingPromise(name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Hello, ${name}!`);
      }, 2000); // Wait for 2 seconds
    });
  }
  
  // Using the Promise-based function
  function mainPromise() {
    console.log("Starting Promise-based function...");
    delayedGreetingPromise("Alice")
      .then((message) => {
        console.log(message); // Output: "Hello, Alice!" after 2 seconds
      });
  }
  
  mainPromise();
  