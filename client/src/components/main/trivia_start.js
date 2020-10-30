import React, { useEffect, useState } from 'react';

const TriviaStart = props => {
  const [roundStatus, setRoundStatus] = useState('start');
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  useEffect(() => {
  })

  const roundStart = () => {
    return <div>
      <p>Round {round} Starting</p>
      <button onClick={() => setRoundStatus('playing')}>next</button>
    </div>
  };

  const roundPlaying = () => {
    return <div>
      currently playing
      <button onClick={() => setRoundStatus('end')}>next</button>
    </div>
  };

  const roundEnd = () => {
    return <div>
      <p>Round {round} Ended</p>
      <p>{localStorage.name}'s current score is:</p>
      <p>{score}</p>
      <button onClick={() => {
        setRoundStatus('start');
        props.onClick()
      }}>click</button>
    </div>
  };

  return <div>
    {
      roundStatus === 'start' ? roundStart() : roundStatus === 'playing' ? roundPlaying() : roundEnd()
    }
  </div>
};

export default TriviaStart;