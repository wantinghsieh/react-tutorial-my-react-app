import { useState } from 'react';
import './Color.css';

function Color() {
  const [color, setColor] = useState("red");

  return (
    <div className="color-widget">
      <p className="color-label">My favorite color is {color}!</p>
      <button
        type="button"
        className="color-button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        className="color-button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        className="color-button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        className="color-button"
        onClick={() => setColor("green")}
      >Green</button>
    </div>
  );
}

export default Color;
