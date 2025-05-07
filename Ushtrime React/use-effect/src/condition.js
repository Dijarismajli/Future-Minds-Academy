import React, { useState, useEffect } from 'react';


function Conditional() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount or when `isRunning` changes
    }, [isRunning]); // Effect depends on `isRunning`

    return (
        <>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div></>
    )
}

export default Conditional