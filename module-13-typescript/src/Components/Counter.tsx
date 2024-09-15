import React, { useState } from 'react';

interface Counter {
    child: number;
}

const StartCounter: React.FC<Counter> = () => {
    const [count, setCount] = useState<Counter>({ child: 0 });

    const addCount = () => {
        setCount(prevState => ({ child: prevState.child + 1}));
    };

    const decreaseCount = () => {
        setCount(prevState => ({ child: prevState.child - 1}));
    };

    const resetCount = () => {
        setCount({ child: 0 });
    };

    return(
        <div>
            <h2>Counter: {count.child}</h2>
            <button onClick={addCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default StartCounter;