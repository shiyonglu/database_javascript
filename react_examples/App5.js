import React, { useState } from 'react';

function App() {
  // State to store the input temperature and the converted temperature
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Handle Celsius input and update Fahrenheit
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    // Convert to Fahrenheit if the input is valid
    if (!isNaN(value) && value !== '') {
      setFahrenheit((value * 9) / 5 + 32);
    } else {
      setFahrenheit('');
    }
  };

  // Handle Fahrenheit input and update Celsius
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    // Convert to Celsius if the input is valid
    if (!isNaN(value) && value !== '') {
      setCelsius(((value - 32) * 5) / 9);
    } else {
      setCelsius('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temperature Converter</h1>
      <div style={{ margin: '20px' }}>
        <label>
          Celsius:
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
      <div style={{ margin: '20px' }}>
        <label>
          Fahrenheit:
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
