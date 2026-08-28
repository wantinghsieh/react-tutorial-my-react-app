import { createRoot } from 'react-dom/client';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './Counter'
import Color from './Color'
import './App.css'

function App() {
  return (
    <>
      <Counter />
      <Color />
    </>
  );
}

export default App
