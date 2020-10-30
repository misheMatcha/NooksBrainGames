import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../../util/general_util';
import TANDEM_QUESTIONS from './Apprentice_TandemFor400_Data.json';
import Question from './question';

const TriviaStart = props => {
  const [roundStatus, setRoundStatus] = useState('start');
  const [round, setRound] = useState(1); // max rounds is 2 to ensure no questions are ever repeated during a game
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(null);
  const usedIndices = new Set();
  const [questionCount, setQuestionCount] = useState(1);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if(questionIndex === null) setQuestionIndex(getValidIndex(TANDEM_QUESTIONS.length - 1));
  },[questionIndex])

  const roundStart = () => {
    return <div>
      <p>Round {round} Starting</p>
      <button onClick={() => setRoundStatus('playing')}>next</button>
    </div>
  };

  const getValidIndex = max => {
    let index = getRandomNumber(max);
    while(usedIndices.has(index)){
      index = getRandomNumber(max);
    }
    return index;
  };

  const roundPlaying = () => {
    return <div>
      <Question question={TANDEM_QUESTIONS[questionIndex].question} incorrect={TANDEM_QUESTIONS[questionIndex].incorrect} correct={TANDEM_QUESTIONS[questionIndex].correct} onClick={() => setQuestionIndex(questionCount + 1)} />
      {
        questionCount % 10 === 0 ? <button onClick={() => setRoundStatus('end')}>next</button> : ''
      }
    </div>
  };

  const roundCheck = () => {
    if(round === 2) props.onClick();
    setRoundStatus('start');
    setRound(round + 1);
  };

  const roundEnd = () => {
    return <div>
      <p>Round {round} Ended</p>
      <p>{localStorage.name}'s current score is:</p>
      <p>{score}</p>
      <button onClick={() => roundCheck()}>click</button>
    </div>
  };

  return <div>
    {
      roundStatus === 'start' ? roundStart() : roundStatus === 'playing' ? roundPlaying() : roundEnd()
    }
  </div>
};

export default TriviaStart;