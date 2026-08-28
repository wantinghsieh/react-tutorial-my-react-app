import { useState, useRef, useEffect } from 'react';
import './Ref2.css';

function Ref2() {

    const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div className="ref2-widget">
      <input
        type="text"
        className="ref2-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="ref2-value">Current Value: <span>{inputValue}</span></p>
      <p className="ref2-value">Previous Value: <span>{previousInputValue.current}</span></p>
    </div>
  );
}

export default Ref2;