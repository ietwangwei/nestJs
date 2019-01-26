import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => 
        <Redirect to="/login" />
      } />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </HashRouter>
)

export default Router

