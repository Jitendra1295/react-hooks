import React, { useState, useCallback } from 'react';

const HookUseCallback = () => {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the increment function
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            {/* Pass the memoized callback to a child component */}
            <ChildComponent onIncrement={increment} />
        </div>
    );
};

// Example of a child component that receives the memoized callback
const ChildComponent = ({ onIncrement }) => {
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
};

export default HookUseCallback;
