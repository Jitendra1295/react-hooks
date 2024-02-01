import React, { useState } from 'react';


function HookUseState() {
    const [count, setCount] = useState(0);
    const handleCount = (count) => {
        setCount(count)
    }
    return (
        <div className="App">
            <button style={{ height: 50, width: 50 }} onClick={() => { handleCount(count - 1) }}>-</button>{" " + count + " "}<button style={{ height: 50, width: 50 }} onClick={() => { handleCount(count + 1) }}>+</button>
        </div>
    );
}

export default HookUseState;