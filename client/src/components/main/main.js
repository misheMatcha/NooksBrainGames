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
    return <div>
      <h2>Welcome to Nooks Brain Games</h2>
      <div>
        <p>Some say knowledge gives you power, we believe it too!</p>
        <p>At Nooks Brain Games, we want you to have fun while testing your noggin.</p>
        <p>How the game is played:</p>
        <ul>
          <li>Each game consists two rounds</li>
          <li>Each round has 10 multiple choice questions</li>
          <li>Once an answer is submitted you can't change it (oh no!)</li>
          <li>You can look at previous questions you've answered during and after a round</li>
          <li>Your score will be updated after each round</li>
        </ul>
        <p>No matter what, remember to have fun!</p>
      </div>
      <div>
        <label>Name:
          <input type="text" placeholder="ex: Isabelle, K.K Slider, etc..." onChange={event => updatePlayerName(event.target.value)} />
        </label>
      </div>
      <button onClick={() => startGame()}>start</button>
    </div>
  };

  return <div className='main'>
      {!gameStart ? welcomeScreen() : <TriviaStart onClick={() => setGameStart(!gameStart)}/>}
  </div>
};

export default Main;