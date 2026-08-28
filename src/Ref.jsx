import { useState, useRef, useEffect } from 'react';
import './Ref.css';

function Ref() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
    count.current = count.current + 1;
    });

    return (
    <div className="ref-widget">
      <p>Type in the input field:</p>
      <input
        type="text"
        className="ref-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="render-count">Render Count: <span>{count.current}</span></p>
    </div>
  );
}

export default Ref;