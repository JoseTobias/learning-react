import React from 'react'
import './Button.css'

export default props => {
    let classButton = 'button '
    classButton+= props.operation ? 'operation': ''
    classButton+= props.double ? 'double': ''
    classButton+= props.triple ? 'triple': ''
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classButton}>
            {props.label}
        </button>
    )
}