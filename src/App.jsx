import React from 'react'
// pkgs: react-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// components: base-page
import { Auth } from './pages/Auth/Auth'
import { Main } from './pages/Main/Main'
// styles: global
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Auth} path='/auth' />
        <Route component={Main} path='/main' />
        <Redirect from='/' to='/main' />
      </Switch>
    </BrowserRouter>
  )
}
