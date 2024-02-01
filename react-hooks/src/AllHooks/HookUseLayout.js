import React, { useLayoutEffect, useEffect } from "react";

const HookUseLayoutEffect = () => {

    // useLayoutEffect runs synchronously after all DOM mutations.
    useLayoutEffect(() => {
        console.log("useLayoutEffect hello");
    }, []);

    // useEffect runs after the render is committed to the screen.
    useEffect(() => {
        console.log("useEffect hello");
    }, []);

    return <div>Hello</div>;
};

export default HookUseLayoutEffect;