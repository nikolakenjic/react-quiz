import React, { useEffect } from 'react';

const Timer = ({ dispatch, secondsRemaining }) => {
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const tickTack = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(tickTack);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && '0'}
      {min}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
};

export default Timer;
