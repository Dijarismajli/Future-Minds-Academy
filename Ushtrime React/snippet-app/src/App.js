import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => count > 0 && setCount(count - 1)
  const increment = () => count < 7 && setCount(count + 1)


  const [isVisible, setisVisible] = useState(true);
  const toggle = () => setisVisible(!isVisible);

  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => setInputValue(e.target.value);


  return (
    <>
      <h1>Counting</h1>
      <hr />
      <div className="wrapper">
        <button onClick={decrement}>-</button>
        <h2 id="results">{count}</h2>
        <button onClick={increment}>+</button>
      </div>
      <h1>Toggle</h1>
      <hr />
      <button onClick={toggle}>Click</button>
      {isVisible && <p>This is a Toggled text.</p>}

      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You typed: {inputValue}</p>
      </div>
    </>
  );
}

export default App;
