import './App.css';

import React, { useEffect, useState } from 'react';


function App() {


  const [count, setCount] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  })
  ////

  const [hover, setHover] = useState(false);

  ////

  const [isVisible, setisVisible] = useState(false);

  ///

  const [pass, setPass] = useState(false);



  return (
    <>

      <h1 id="timer" >{count}</h1>



      {/* /// */}



      <select onChange={(s) => setHover(s.target.value)} >


        <option value='red'>red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
        <p>{hover}</p>

      </select>


      {/* //// */}


      <div style={{ color: hover ? "red" : "black" }}
        onMouseOver={() => setHover(true)}
        onMouseout={() => setHover(false)}
      >123</div>

      {/* /// */}

      <h1>Toggle</h1>
      <div style={{ backgroundColor: isVisible ? "black" : "white" }}>
        <button onClick={() => setisVisible(!isVisible)}>Toogle Theme</button>
        <p>Toggle</p>
      </div>

      {/* //// */}

      <input type={pass ? "text" : "password"} id='pasword' />
      <button onClick={() => setPass(!pass)}>show </button>


    </>
  );
}

export default App;
