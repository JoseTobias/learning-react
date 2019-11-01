import React from 'react'
import { propsChildrem } from '../utils/utils'

export default props =>
    <div>
        {propsChildrem(props)}
        {/* {React.Children.map(props.children, (child) => {
            return React.cloneElement(child, { ...props })
        })} */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children,
        { lastName: props.lastName})} */}
    </div>