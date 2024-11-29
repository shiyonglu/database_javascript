/* 1. arrow function
   (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response as JSON
    }



*/

// Fetch and handle data using `.then()`
function fetchTodoTitle() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      console.log('Title:', data.title); // Log the title only
    })
    .catch((error) => {
      console.error('Error fetching the TODO:', error);
    });
}

// Call the function
fetchTodoTitle();
