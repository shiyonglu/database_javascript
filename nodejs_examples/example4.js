
// Define the async function
async function fetchTodo() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'; // API URL

    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching the data:', error);
    return null;
  }
}

// Main function to call the async fetchTodo function
async function main() {
  const todo = await fetchTodo();

  // Print the fetched data
  if (todo) {
    console.log('Fetched TODO:', todo);
  } else {
    console.log('Failed to fetch the TODO.');
  }
}

// Run the main function
main();
