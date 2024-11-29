async function sayHello() {
    return "Hello, World, asynchronous function! ";
  }
  
  // Call the async function
  async function main() {
    const message = await sayHello();
    console.log(message);
  }
  
  // Run the main function
  main();