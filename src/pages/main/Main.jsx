import React, { Component } from 'react'
// react-router
import { Route, Switch } from 'react-router-dom'
// components
import Navbar from '../../components/module/Navbar/Navbar'
// routes
import PublicRoute from '../../configs/PublicRoute'
import PrivateRoute from '../../configs/PrivateRoute'
// pages
import Home from './Home/Home'
import Product from './Product/Product'
import Cart from './Cart/Cart'
import History from './History/History'
import Detail from './Detail/Detail'
import Profile from './Profile/Profile'
import NotFound from '../NotFound/NotFound'

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
            <PrivateRoute
              component={Detail}
              path={`${path}/product/:id`}
              exact
            />
            <PrivateRoute component={Cart} path={`${path}/cart`} exact />
            <PrivateRoute component={History} path={`${path}/history`} exact />
            <PrivateRoute component={Profile} path={`${path}/profile`} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main
