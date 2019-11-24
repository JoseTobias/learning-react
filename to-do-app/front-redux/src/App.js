import React from 'react';
import './App.css';

import Menu from './components/template/menu'
import Routes from './routes'

export default props => (
  <div className='container'>
    <Menu />
    <Routes />
  </div>
);
