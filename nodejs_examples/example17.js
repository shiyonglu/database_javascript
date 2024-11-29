// Create a Promise that resolves or rejects based on the input
function simplePromise(shouldResolve) {
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve("Resolved Value"); // Fulfill the Promise
      } else {
        reject("Rejected Value"); // Reject the Promise
      }
    });
  }
  
  // Use an async function to handle the Promise
  async function main() {
    try {
      // Call the Promise and await its result
      const result = await simplePromise(true); // Change to false to trigger reject
      console.log(result); // Output: Resolved Value
    } catch (error) {
      // Handle rejection
      console.error(error); // Output: Rejected Value (if shouldResolve is false)
    }
  }
  
  // Run the async function
  main();
  