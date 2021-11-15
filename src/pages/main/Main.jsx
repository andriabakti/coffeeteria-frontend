import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

import PrivateRoute from '../../configs/PrivateRoute';

import Navbar from '../../components/module/Navbar/Navbar'

import Home from './Home/Home';
import Product from './Product/Product'
import Cart from './Cart/Cart';
import History from './History/History';
import PublicRoute from '../../configs/PublicRoute';
import Detail from './Detail/Detail';
// import NotFound from './pages/NotFound/NotFound'

class Main extends Component {
  render() {
    const { path } = this.props.match
    // console.log(this.props);
    return (
      <div>
        <Navbar className />
        <div>
          <Switch>
            <PublicRoute component={Home} path={`${path}/`} exact />
            <PrivateRoute component={Product} path={`${path}/product`} exact />
            <PrivateRoute component={Detail} path={`${path}/detail`} exact />
            <PrivateRoute component={Cart} path={`${path}/cart`} exact />
            <PrivateRoute component={History} path={`${path}/history`} exact />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;