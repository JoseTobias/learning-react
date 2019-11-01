import React from 'react'

export function propsChildrem(props) {
    return React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { ...props })
    })
}