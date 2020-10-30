import React, { useEffect, useState } from 'react';
import { getRandomNumber, generateAnswerArray } from '../../util/general_util';
import TANDEM_QUESTIONS from './Apprentice_TandemFor400_Data.json';

const TriviaRound = () => {
  const [whichRound, setWhichRound] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const usedQuestionIndexes = new Set();
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [answerTracker, setAnswerTracker] = useState([]);

  useEffect(() => {
    if(currentQuestionIndex === null) setCurrentQuestionIndex(getValidIndex(TANDEM_QUESTIONS.length - 1));
  },[currentQuestionIndex]);

  const getValidIndex = max => {
    let index = getRandomNumber(max);
    while(usedQuestionIndexes.has(index)){
      index = getRandomNumber(max);
    }
    return index;
  };

  const whichAnswers = (incorrect, correct) => {
    const answers = generateAnswerArray(incorrect, correct);
    return answers.map(answer => {
      return <li key={answer}>
        {answer}
      </li>
    });
  };

  const getRandomQuestion = () => {
    const question = TANDEM_QUESTIONS[currentQuestionIndex];
    console.log(question)
    return <div>
      <p>{question.question}</p>
      <div>
        {whichAnswers(question.incorrect, question.correct)}
      </div>
    </div>
  };

  const submitCurrentAnswer = () => {
    let temp = answerTracker;
    temp.push(currentAnswer);
    setAnswerTracker(temp);
  };

  return <div>
    <h2>Round {whichRound}</h2>
    {getRandomQuestion()}
    <button onClick={() => submitCurrentAnswer()}>Submit</button>
  </div>
};

export default TriviaRound;