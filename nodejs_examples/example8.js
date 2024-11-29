console.log('Before');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(() => console.log('After fetch'));
console.log('End');
// Output:
// Before
// End
// After fetch (printed after fetch resolves)