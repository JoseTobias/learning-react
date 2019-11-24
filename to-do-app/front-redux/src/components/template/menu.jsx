import React from 'react'

export default props => (
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container flex-nowrap justify-content-center'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='far fa-calendar-check'></i> TodoApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse d-none d-md-flex'>
                <ul className='nav navbar-nav flex-row'>
                    <li className='pl-3 pr-3'><a className='text-light text-decoration-none' href='/todos'>Tarefas</a></li>
                    <li className='pl-3 pr-3'><a className='text-light text-decoration-none' href='/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)