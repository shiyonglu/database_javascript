import React, { useState, useEffect } from 'react';

function App() {
  // State to store the timer value and whether the timer is running
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Increment time every second
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount or when isRunning changes
  }, [isRunning]);

  // Functions to control the timer
  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Timer</h1>
      <h2>{time} seconds</h2>
      <div>
        <button onClick={startTimer} style={{ margin: '5px', padding: '10px' }}>Start</button>
        <button onClick={stopTimer} style={{ margin: '5px', padding: '10px' }}>Stop</button>
        <button onClick={resetTimer} style={{ margin: '5px', padding: '10px' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
