// Define the function to fetch TODO using Promise
function fetchTodo() {
    return new Promise((resolve, reject) => {
      const url = 'https://jsonplaceholder.typicode.com/todos/1'; // API URL
  
      // Fetch data from the API
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            // If the response is not OK, reject the Promise
            reject(new Error(`HTTP error! Status: ${response.status}`));
          }
          return response.json(); // Parse the response as JSON
        })
        .then((data) => {
          // Resolve the Promise with the fetched data
          resolve(data);
        })
        .catch((error) => {
          // Reject the Promise in case of any error
          reject(error);
        });
    });
  }
  
  // Main function to call the fetchTodo function
  function main() {
    fetchTodo()
      .then((todo) => {
        // Handle resolved Promise
        console.log('Fetched TODO:', todo.title);
      })
      .catch((error) => {
        // Handle rejected Promise
        console.error('Failed to fetch the TODO:', error.message);
      });
  }
  
  // Run the main function
  main();
  