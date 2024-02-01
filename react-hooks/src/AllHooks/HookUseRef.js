import React, { useRef, useState, useEffect } from 'react';

const HookUseRef = () => {

    // Create a ref to store the input element
    const inputRef = useRef(null);

    // Function to focus on the input field and update the valueRef
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>Focus Input Example</h2>
            <input ref={inputRef} type="text" placeholder="Type something..." />
            <button onClick={focusInput}>Focus on Input</button>
        </div>
    );
}

export default HookUseRef;