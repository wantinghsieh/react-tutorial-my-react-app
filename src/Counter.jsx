import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-widget">
      <span className="count">{count}</span>
      <button
        type="button"
        onClick={() => setCount((c) => Math.max(0, c - 1))}
      >-</button>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
      >+</button>
    </div>
  );
}

export default Counter;
