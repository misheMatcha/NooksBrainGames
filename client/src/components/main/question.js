import React, { useEffect, useState } from 'react';
import { generateAnswerArray } from '../../util/general_util';

const Question = props => {
  const [pick, setPick] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [tempCorrect, setTempCorrect] = useState(props.correct)

  const questionCleanUp = () => {
    if(tempCorrect !== props.correct){
      setAnswers(generateAnswerArray(props.incorrect, props.correct));
      setPick(null);
      setHasSubmitted(false);
      setNextQuestion(false);
    }
  };

  useEffect(() => {
    if(!hasSubmitted && !answers.length) setAnswers(generateAnswerArray(props.incorrect, props.correct));
    if(nextQuestion) questionCleanUp();
  },[props]);

  const updatePick = answer => {
    setPick(answer);
  };

  const submitAnswer = () => {
    setHasSubmitted(true);
  };

  const gotoNextQuestion = () => {
    setNextQuestion(true);
    props.onClick(pick);
  };

  const showChoices = (answers, correct) => {
    return <div>
      <ul>
        {
          answers.map(answer => {
            if(pick === null || pick !== answer){
              return <li key={answer} className='pick-default' onClick={() => updatePick(answer)}>
                {answer}
              </li>
            }else if(pick === answer){
              return <li key={answer} className='pick-chosen' onClick={() => updatePick(answer)}>
                {answer}
              </li>
            }
          })
        }
      </ul>
      <button onClick={() => submitAnswer()}>submit</button>
    </div>
  };

  const showResult = (answers, correct) => {
    return <div>
      <ul>
        {
          answers.map(answer => {
            // if the answer matches the picked answer
            if(pick === answer){
              // Then we need to check whether or not it's the correct one
              // If it is then display it as correct
              if(pick === correct){
                return <li key={answer} className='pick-correct'>
                {answer}
              </li>
              }else{
                // Otherwise display it as incorrect
                // Let's the user know which answer they got right or wrong
                return <li key={answer} className='pick-incorrect'>
                {answer}
              </li>
              }
            }else{
              // Otherwise check if the current answer is the correct one
              // If it is show which answer was the correct choice
              if(answer === correct){
                return <li key={answer} className='pick-correct'>
                {answer}
              </li>
              }else{
                // Otherwise use the default class as nothing changed
                return <li key={answer} className='pick-default'>
                {answer}
              </li>
              }
            }
          })
        }
      </ul>
      <button onClick={() => gotoNextQuestion()}>next question</button>
    </div>
  };

  return <div>
    <h1>Question</h1>
    <p>{props.question}</p>
    {
      hasSubmitted ? showResult(answers, props.correct) : showChoices(answers, props.correct)
    }
  </div>
};

export default Question;