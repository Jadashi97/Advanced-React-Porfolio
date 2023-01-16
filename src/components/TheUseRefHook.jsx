import React, { useRef } from 'react';


const TheUseRefHook = () => {
    const formInputRef = useRef(null);

    const focusInput = ()=> {
        formInputRef.current.focus();
    }

    return (
        <div>
        <h1>Using useRef to access the underlying DOM</h1>

        <input ref={formInputRef} type="text" />

        <button onClick={focusInput}>
            focus input
        </button>
        </div>
    )
}

export default TheUseRefHook
