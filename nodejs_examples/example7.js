
/*
In JavaScript, .then() is a method available on Promises. It is used to specify what should happen after a Promise is resolved (i.e., when the asynchronous operation is successful). It allows chaining operations that depend on the result of a previous asynchronous task.

Here’s a summary of the .then() clause in a list:

Purpose: Used to specify what should happen after a Promise is resolved.

Takes a Callback:

The .then() method accepts a function to handle the resolved value of the Promise.
Returns a New Promise:

Each .then() call creates and returns a new Promise, allowing for chaining.
Handles Transformation:

Any value returned inside a .then() becomes the resolved value of the new Promise.
If a Promise is returned inside .then(), it waits for that Promise to resolve.
Non-blocking:

The .then() clause is asynchronous and does not block the main thread.
Error Handling:

Errors thrown inside a .then() block are passed to the next .catch() in the chain.
Used for Sequential Operations:

Enables chaining multiple asynchronous tasks that depend on each other.
These features make .then() a powerful tool for managing asynchronous workflows in JavaScript.
*/


const fetchDataAsync = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data.title;
  };
  
  fetchDataAsync().then((title) => console.log(title));