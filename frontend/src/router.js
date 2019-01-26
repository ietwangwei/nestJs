import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login/login'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => 
        <Redirect to="/login" />
      } />
      <Route exact path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default Router

