import React, { useEffect, useState } from 'react';
import { getRandomNumber } from '../../util/general_util';
import TANDEM_QUESTIONS from './Apprentice_TandemFor400_Data.json';
import Question from './question';

const TriviaStart = props => {
  const [roundStatus, setRoundStatus] = useState('start');
  const [round, setRound] = useState(1); // max rounds is 2 to ensure no questions are ever repeated during a game
  const [roundScore, setRoundScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [usedIndices, setUsedIndices] = useState([]);
  const [questionCount, setQuestionCount] = useState(1);
  const [answers, setAnswers] = useState([]);

  const getScore = () => {
    let currentScore = 0;
    let roundArray = answers.slice(round * 10 - 10);
    roundArray.forEach(answer => {
      if(answer[1]) currentScore += 10;
    });
    setRoundScore(currentScore);
    setOverallScore(currentScore + overallScore);
  };

  useEffect(() => {
    if(questionIndex === null) setQuestionIndex(getValidIndex(TANDEM_QUESTIONS.length - 1));
  },[props])

  const roundStart = () => {
    return <div>
      <p>Round {round} Starting</p>
      <button onClick={() => setRoundStatus('playing')}>next</button>
    </div>
  };

  const getValidIndex = max => {
    let index = getRandomNumber(max);
    while(usedIndices.includes(index)){
      index = getRandomNumber(max);
    }
    setUsedIndices([...usedIndices, index]);
    return index;
  };

  const getNextQuestion = (answer, isCorrect) => {
    setAnswers([...answers, [answer, isCorrect]]);
    setQuestionCount(questionCount + 1);
    setQuestionIndex(getValidIndex(TANDEM_QUESTIONS.length - 1));
  };

  const roundPlaying = () => {
    return <div>
      <Question count={questionCount} question={TANDEM_QUESTIONS[questionIndex].question} incorrect={TANDEM_QUESTIONS[questionIndex].incorrect} correct={TANDEM_QUESTIONS[questionIndex].correct} onClick={(answer, isCorrect, roundEnded) => {
        if(questionCount === 10){
          setRoundStatus('end');
          getNextQuestion(answer, isCorrect);
          getScore();
        }else if(questionCount === 20){
          setRoundStatus('end');
          setAnswers([...answers, [answer, isCorrect]]);
          getScore();
        }else{
          getNextQuestion(answer, isCorrect);
        }
      }} />
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
      <p>{roundScore}</p>
      <p>{overallScore}</p>
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