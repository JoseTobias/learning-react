import React from 'react'

export default props => (
    <li className='treeview'>
        <a href="">
            <i className={props.icon}></i> {props.label}
            <i class="fas fa-angle-down"></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)