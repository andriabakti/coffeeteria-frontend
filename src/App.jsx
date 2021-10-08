import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/base/Navbar/Navbar'
import Footer from './components/base/Footer/Footer'
import Home from './pages/main/Home/Home';
import Product from './pages/main/Product/Product'
import Cart from './pages/main/Cart/Cart';
import History from './pages/main/History/History';
import NotFound from './pages/NotFound/NotFound'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route component={Home} path="/" exact></Route>
            <Route component={Product} path="/product" exact />
            <Route component={Cart} path="/cart" exact />
            <Route component={History} path="/history" exact />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
