import React from 'react';
import './App.css';

import Header from '../src/common/template/header'
import SideBar from '../src/common/template/sideBar'
import Footer from '../src/common/template/footer'
import Routes from './routes'

export default (props) => (
  <div className='app'>
    <Header />
    <div className='main'>
      <SideBar />
      <div className='p-2 w-100 cont'>
        <Routes />
      </div>
    </div>
    <Footer />
  </div>
)
