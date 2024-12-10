import React from 'react';

// A functional component that receives a "name" prop
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Main App component
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Greeting App</h1>
      {/* Pass different names as props to the Greeting component */}
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
