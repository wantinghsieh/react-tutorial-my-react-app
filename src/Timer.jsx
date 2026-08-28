import { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setCount((count) => count + 1), 1000);
  });

  return (
    <h1 className="timer-heading">I've rendered {count} times!</h1>
  );
}

export default Timer;
