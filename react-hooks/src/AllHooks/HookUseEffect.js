import React, { useEffect, useState } from 'react';


function HookUseEffect() {
    const [count, setCount] = useState(0);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const handleCount = (count) => {
        setCount(count)
    }
    useEffect(() => {
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });
        return () => {
            console.log("unmount");
        }
    }, [count])
    return (
        <div className="App">
            <div>
                <button style={{ height: 50, width: 50 }} onClick={() => { handleCount(count - 1) }}>-</button>{" " + count + " "}<button style={{ height: 50, width: 50 }} onClick={() => { handleCount(count + 1) }}>+</button>
            </div>
            <div>
                {innerWidth}
            </div>
        </div>
    );
}

export default HookUseEffect;