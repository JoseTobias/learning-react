import React from 'react';
import './App.css';

import Header from '../src/common/template/header'
import SideBar from '../src/common/template/sideBar'
import Footer from '../src/common/template/footer'

export default (props) => (
  <div className='app'>
    <Header />
    <div className='main'>
      <SideBar />
      <div className='p-2'>
        <h1>Conteúdo</h1>
      </div>
    </div>
    <Footer />
  </div>
)
