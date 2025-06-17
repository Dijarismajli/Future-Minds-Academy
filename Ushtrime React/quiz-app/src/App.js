import React, { useState } from 'react';

function App() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2
    },
    {
      question: "What color is the sky?",
      options: ["Green", "Blue", "Red", "Yellow"],
      answer: 1
    },
    {
      question: "How many legs does a spider have?",
      options: ["4", "6", "8", "10"],
      answer: 2
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});

  const [score, setScore] = useState(null);

  const handleChange = (questionIndex, optionIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.map((q, i) => {
      if (userAnswers[i] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="App">

      <h2>Simple Quiz</h2>

      {questions.map((q, i) => (
        <div key={i}>
          <p>{q.question}</p>


          {q.options.map((opt, j) => (
            <div key={j}>
              <label>
                <input type="radio" name={`q${i}`} value={j} checked={userAnswers[i] === j} onChange={() => handleChange(i, j)} />
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>
        Submit Quiz
      </button>

      {score != null && (
        <p>
          You scored {score} out of {questions.length}
        </p>
      )}
    </div>
  );
}

export default App;
