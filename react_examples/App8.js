import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correct: 2, // Index of the correct answer
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correct: 1,
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correct: 2,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Quiz App</h1>
      {showScore ? (
        <div>
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button onClick={resetQuiz} style={buttonStyle}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div style={{ marginTop: '20px' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={buttonStyle}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
