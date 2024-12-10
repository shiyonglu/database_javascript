import React, { useState } from 'react';

function App() {
  const [birthDate, setBirthDate] = useState(''); // State to store the input date
  const [age, setAge] = useState(null); // State to store the calculated age

  // Function to calculate age
  const calculateAge = () => {
    if (birthDate) {
      const birthDateObj = new Date(birthDate);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = today.getMonth() - birthDateObj.getMonth();

      // Adjust age if the current date is before the birth date this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Age Calculator</h1>
      <div>
        <label>
          Enter your birthday:
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </label>
        <button
          onClick={calculateAge}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Calculate Age
        </button>
      </div>
      {age !== null && (
        <h2 style={{ marginTop: '20px' }}>
          You are {age} {age === 1 ? 'year' : 'years'} old.
        </h2>
      )}
    </div>
  );
}

export default App;
