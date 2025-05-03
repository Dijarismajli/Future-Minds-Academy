import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => count < 10 && setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const [isVisible, setisVisible] = useState(true);
  const toggle = () => setisVisible(!isVisible);


  const [inputValue, setinputValue] = useState('')
  const handleChange = () => setinputValue(e.target.value);

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


      <h1>Input Field</h1>
      <hr />
      <input onchange="ChangeTx" type="text" id="inp" />
      <p id="text">You typed:</p>

    </>
  );
}

export default App;
