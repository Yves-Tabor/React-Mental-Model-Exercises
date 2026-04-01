import React from 'react'

function CountRenders(){
    const [render, setRender] = React.useState(0)
    const renderRef = React.useRef(0)
    function handleClick(){
        setRender(prev=> prev + 1)
    }
    return(
        <>
        <p>Render Count: {render}</p>
        <button onClick={handleClick}>Click</button>
        </>
    )
}

export default CountRenders;