import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default props => {
    return (
        <Router history={hashHistory}>

            <Route path='/' component={AuthOrApp}>
                <IndexRoute component={Dashboard}></IndexRoute>
                <Route path='billingCycles' component={BillingCycle}></Route>
            </Route>
            
            <Redirect from='*' to='/' />

        </Router>
    )
}
