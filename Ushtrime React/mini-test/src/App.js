import React, { useState } from 'react';

import './App.css';

function App() {

  const [movie, setismovie] = useState([]);
  const addMovie = () => setismovie(

    [

      ...movie, `Movie${movie.length + 1}`
    ]
  )






  return (
    <>
      <ul>
        {
          movie.map((m, i) => <li key={i}>{m}</li>)
        }
        <button onClick={addMovie}>movie</button>
      </ul>


    </>
  );
}

export default App;
