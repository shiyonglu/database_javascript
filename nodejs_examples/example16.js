
/*
About await: 
1. await is used to work with asynchronous functions, but it does not "call" them
2. await will return the value returned by the resolve call. 
3. 

await only blocks the execution of the async function itself, not other parts of the code 
*/

async function fetchData() {
    console.log("Fetching data...");
    const data = await new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 2000));
    console.log(data);
  }
  
  console.log("Start");
  fetchData();
  console.log("End");