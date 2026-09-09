import { createRoot } from 'react-dom/client';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './Counter'
import Color from './Color'
import Timer from './Timer'
import Ref from './Ref'
import Ref2 from './Ref2'
import Score from './Score'
import WithoutCallbackExample from './WithoutCallbackExample'
import './App.css'

function App() {
  return (
    <>
      <Ref />
      <Timer />
      <Counter />
      <Color />
      <Ref2 />
      <Score />
      <WithoutCallbackExample />
    </>
  );
}

export default App
