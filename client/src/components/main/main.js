import React, { useState } from 'react';

const Main = () => {
  const [gameStart, setGameStart] = useState(false);
  const welcomeScreen = () => {
    return <div>
      <p>welcome</p>
      <div>introduction</div>
      <input type="text" placeholder="name" />
      <button onClick={() => setGameStart(true)}>start</button>
    </div>
  };

  const triviaScreen = () => {
    return <div>
      questions
    </div>
  };

  return <div>
    <div>
      {!gameStart ? welcomeScreen() : triviaScreen()}
    </div>
  </div>
};

export default Main;