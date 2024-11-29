
/* In this exmaple, we create an async funtion using the kwyword async */


// Async function to simulate a delayed greeting
async function delayedGreeting(name) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Utility to delay
  await delay(2000); // Wait for 2 seconds
  return `Hello, ${name}!`;
}

// Using the async function
async function mainAsync() {
  console.log("Starting async function...");
  const message = await delayedGreeting("Alice");
  console.log(message); // Output: "Hello, Alice!" after 2 seconds
}

mainAsync();