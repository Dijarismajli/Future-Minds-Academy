import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );

}

export default App;
