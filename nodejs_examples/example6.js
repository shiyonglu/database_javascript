
/*
An example of arrow function. 
*/

const validateData = (data) => {
    if (!data || data.length === 0) {
      throw new Error('Invalid data!');
    }
    return data.toUpperCase(); // Example transformation
  };
  
  try {
    const result = validateData('hello world');
    console.log(result); // Output: HELLO WORLD
  } catch (error) {
    console.error('Error:', error.message);
  }