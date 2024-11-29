/*
  Step 1, install React server: 
       npx create-react-app my-react-app
  Step 2: 
       cd my-react-app
       repalce src/App.js with this file
  Step 3, start the React Server
       npm start
  Step 4: 
       point your brower to 
       https://localhost:3000


index.html: 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div> <!-- React renders here -->
  </body>
</html>


index.js: 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component

// Render the App component into the root DOM node
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

*/

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
