import React, { useEffect, useState } from 'react';
import { generateAnswerArray } from '../../util/general_util';

const Question = props => {
  const answers = generateAnswerArray(props.incorrect, props.correct);
  const [pick, setPick] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  
  useEffect(() => {
  },[]);

  const showChoices = () => {
    return <div>
      default no selection
    </div>
  };

  const showResult = () => {
    return <div>
      after submitting
    </div>
  };

  const showAnswers = () => {
    return answers.map(answer => {
      return <li key={answer}>
        {answer}
      </li>
    });
  };

  return <div>
    <h1>Question</h1>
    <p>{props.question}</p>
    {
      hasSubmitted ? showAnswers() : showChoices()
    }
  </div>
};

export default Question;