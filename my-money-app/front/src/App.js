import React from 'react';
import './App.css';

import Header from '../src/common/template/header'
import SideBar from '../src/common/template/sideBar'

export default (props) => (
  <div className='app'>
    <Header />
    <SideBar />
  </div>
)
