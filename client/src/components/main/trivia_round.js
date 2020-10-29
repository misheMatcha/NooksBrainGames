import React, { useEffect, useState } from 'react';
import * as helperUtil from '../../util/general_util';
import TANDEM_QUESTIONS from './Apprentice_TandemFor400_Data.json';

const TriviaRound = () => {
  const [round, setRound] = useState(1);
  const [questionNum, setQuestionNum] = useState(1);
  const previousQuestions = new Set();
  const questionNumTracker = new Set();

  useEffect(() => {
  },[]);

  // Implement a timer later
  const startRound = () => {
  };

  // Check if the question is valid
  const getValidRandomNum = max => {
    const randNum = helperUtil.getRandomNumber(max);
    while(questionNumTracker.has(randNum)){
      randNum = helperUtil.getRandomNumber(max);
    }
    return randNum;
  };

  // Displays answers
  const whichAnswers = answers => {
    const alpha = ['a', 'b', 'c', 'd'];

    return answers.map((answer, idx) => {
      return <li key={answer}>
        <p>{alpha[idx]}</p>
        <p>{answer}</p>
      </li>
    })
  };

  // Renders the questions and answers
  const whichQuestion = () => {
    const questionNum = getValidRandomNum(TANDEM_QUESTIONS.length - 1);
    return TANDEM_QUESTIONS.map((question, idx) => {
      if(questionNum === idx){
        questionNumTracker.add(questionNum);
        const answers = helperUtil.generateAnswerArray(question.incorrect, question.correct);
        console.log(answers)
        return <div key={question.question}>
          <p>{question.question}</p>
          <ul>
            {whichAnswers(answers)}
          </ul>
        </div>
      }
    });
  };

  return <div>
    round 1
    {whichQuestion()}
  </div>
};

export default TriviaRound;