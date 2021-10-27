import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from '../../components/module/Navbar/Navbar'

import Home from './Home/Home';
import Product from './Product/Product'
import Cart from './Cart/Cart';
import History from './History/History';
// import NotFound from './pages/NotFound/NotFound'

class Main extends Component {
  render() {
    const { path } = this.props.match
    return (
      <div>
        <Navbar className />
        <div>
          <Switch>
            <Route component={Home} path={`${path}/`} exact />
            <Route component={Product} path={`${path}/product`} exact />
            <Route component={Cart} path={`${path}/cart`} exact />
            <Route component={History} path={`${path}/history`} exact />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;