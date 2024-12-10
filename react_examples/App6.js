import React, { useState } from 'react';

function App() {
  // State to store the selected color
  const [color, setColor] = useState('white');

  // Array of colors to choose from
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'white'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Color Picker</h1>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          margin: '20px auto',
          border: '1px solid black',
        }}
      >
        <p style={{ lineHeight: '200px', margin: 0, color: color === 'white' ? 'black' : 'white' }}>
          {color.toUpperCase()}
        </p>
      </div>
      <div>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              margin: '5px',
              padding: '10px',
              backgroundColor: c,
              color: c === 'white' ? 'black' : 'white',
              border: '1px solid black',
              cursor: 'pointer',
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
