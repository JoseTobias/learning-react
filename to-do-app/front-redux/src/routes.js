import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import Header from './components/todo'
import About from './components/about/index'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={Header} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
    </BrowserRouter>
)