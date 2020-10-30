import React, { useEffect } from 'react';

const Question = ({ question, answers, correct }) => {
  useEffect(() => {
  },[]);

  const showAnswers = () => {
    return answers.map(answer => {
      return <li key={answer}>
        {answer}
      </li>
    });
  };

  return <div>
    <p>{question}</p>
    <ul>
      {showAnswers()}
    </ul>
  </div>
};

export default Question;