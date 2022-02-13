import React from 'react';
// react-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// page bases
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route component={Auth} path="/auth" />
          <Route component={Main} path="/main" />
          <Redirect from="/" to="/main" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
