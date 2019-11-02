import React from 'react'
import Son from './Son'

export default props => {
    const notifyExit = 
        place => alert(`Released to ${place}`)
    
    return (
        <div>
            <Son notifyExit={notifyExit} />
        </div>
    )
}