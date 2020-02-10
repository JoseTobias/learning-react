import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import billingCycle from './billingCycle/billingCycle'
import dashboard from './dashboard/dashboard'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={dashboard} />
            <Route path='/billingCyles' component={billingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
)