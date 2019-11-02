import React, { useState, useEffect } from 'react'

export default props => {
    const [counter, Setcounter] = useState(100)
    const [status, setStatus] = useState('par')

    useEffect((counter) => {
        counter % 2 === 0 ? setStatus('par') : setStatus('impar')
    }, [])

    return (
        <div>
            <h1>{counter}</h1>
            <h3>{status}</h3>
            <button onClick={() => Setcounter(counter+1)}>Inc</button>
            <button onClick={() => Setcounter(counter-1)}>Dec</button>
        </div>
    )
}