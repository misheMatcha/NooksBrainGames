import React, { useState } from 'react';
import TriviaStart from './trivia_start';

const Main = () => {
  const [gameStart, setGameStart] = useState(false);
  const [name, setName] = useState('');

  const startGame = () => {
    localStorage.setItem('name', name);
    setGameStart(true);
  };

  const updatePlayerName = name => {
    setName(name);
  };

  const welcomeScreen = () => {
    return <div className='welcome'>
      <div className='welcome-instructions'>
        <h2>Welcome to Nooks Brain Games</h2>
        <p className='welcome-instructions-intro'>
          Some say knowledge gives you power, we believe it too! <br/>
          At Nooks Brain Games, we want you to have fun while testing your noggin.
        </p>
        <ul>
          <p className='welcome-instructions-howto'>How the game is played:</p>
          <li>Each game consists two rounds</li>
          <li>Each round has 10 multiple choice questions</li>
          <li>Once an answer is submitted you can't change it (oh no!)</li>
          {/* <li>You can look at previous questions you've answered during and after a round</li> */}
          <li>Your score will be updated after each round</li>
        </ul>
        <p className='welcome-fun'>No matter what, remember to have fun!</p>
      </div>
      <div className='welcome-start'>
        <div className='welcome-start-name'>
          <p>Feel free to enter your name (optional):</p>
          <label>
            <input type="text" placeholder="ex: Isabelle, K.K Slider, etc..." onChange={event => updatePlayerName(event.target.value)} />
          </label>
        </div>
        <button className='button' onClick={() => startGame()}>Start</button>
      </div>
    </div>
  };

  return <div className='main'>
      {!gameStart ? welcomeScreen() : <TriviaStart onClick={() => setGameStart(!gameStart)}/>}
  </div>
};

export default Main;