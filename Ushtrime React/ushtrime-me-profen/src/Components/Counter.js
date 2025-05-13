import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => count < 10 && setCount(count + 1);
    const decrement = () => count > 0 && setCount(count - 1);
    return (

        <>
            <h1>Counting</h1>
            <hr />
            <div >
                <button onClick={decrement}>-</button>
                <h2>{count}</h2>
                <button onClick={increment}>+</button> <hr />
                <button onClick={() => setCount(0)}> Reset</button>
            </div>
        </>
    )
}

export default Counter