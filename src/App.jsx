import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Auth from './pages/auth/Auth';
import Main from './pages/main/Main';
// import Footer from './components/base/Footer/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route component={Auth} path="/auth" />
            <Route component={Main} path="/main" />
            <Redirect from="/" to="/main" />
          </Switch>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
