import React from 'react'
// react-router
import { Route, Switch, useRouteMatch } from 'react-router-dom'
// react-custom-scrollbars
import { Scrollbars } from 'react-custom-scrollbars-2'
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
// style
import style from './main.module.css'

const Main = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  const { path } = useRouteMatch()
  return (
    <div>
      <Navbar id='scroll' />
      <Scrollbars
        renderThumbVertical={(props) => (
          <div {...props} className={style.thumb_vertical} />
        )}
        className={`${style.container}`}>
        <Switch>
          <PublicRoute component={Home} path={`${path}`} exact />
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
      </Scrollbars>
    </div>
  )
}

export default Main
