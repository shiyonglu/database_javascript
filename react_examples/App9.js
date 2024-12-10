import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(''); // State for weight input
  const [height, setHeight] = useState(''); // State for height input
  const [bmi, setBmi] = useState(null); // State for BMI result
  const [message, setMessage] = useState(''); // State for BMI status message

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2); // Calculate BMI
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      setMessage('Please enter valid weight and height.');
      setBmi(null);
    }
  };

  // Function to reset inputs and results
  const resetInputs = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>BMI Calculator</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
          style={inputStyle}
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height (cm)"
          style={inputStyle}
        />
        <button onClick={calculateBMI} style={buttonStyle}>
          Calculate BMI
        </button>
        <button onClick={resetInputs} style={{ ...buttonStyle, marginLeft: '10px' }}>
          Reset
        </button>
      </div>
      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  margin: '5px',
  width: '150px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
