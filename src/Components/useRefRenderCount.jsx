/**
 * Build a component that tracks how many times it has re-rendered without showing that number on the screen.
 * 
 * Task: Create a component with a button that updates a useState counter (which is visible). 
 * Use useRef to keep track of the "Total Render Count" and log it to the console every time 
 * the component renders.
 */

import React from 'react'

function CountRenders(){
    const [count, setCount] = React.useState(0)
    const renderRef = React.useRef(0)
    
    React.useEffect(()=>{
        renderRef.current++;
        console.log("Actual Renders:", renderRef.current);
    })
    function handleClick(){
        setCount(prev=> prev + 1);
    }
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default CountRenders;