import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/base/Navbar/Navbar'
import Footer from './components/base/Footer/Footer'
import Product from './pages/main/Product/Product'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Navbar />
        <Switch>
          <Route component={Product} path="/menu" exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
