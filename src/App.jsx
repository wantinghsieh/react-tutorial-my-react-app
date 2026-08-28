import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './Counter'
import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <Counter />
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => {
          setColor("blue");
        }}
      >Blue</button>
      <button
        type="button"
        onClick={() => {
          setColor("red");
        }}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default App
