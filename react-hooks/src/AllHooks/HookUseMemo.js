import React, { useMemo, useState } from 'react';

function HookUseMemo() {
    const [inputValue, setInputValue] = useState('');

    const expensiveComputation = (input) => {
        console.log('Executing expensive computation...');
        return input.toUpperCase();
    };

    const memoizedResult = useMemo(() => expensiveComputation(inputValue), [inputValue]);

    return (
        <div>
            <label>
                Input:
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </label>

            <div>
                <p>Result of expensive computation: {memoizedResult}</p>
            </div>
        </div>
    );
}

export default HookUseMemo;