import React from 'react'
// react-router
import { Route, Switch, useRouteMatch } from 'react-router-dom'
// components
import NavBar from '../../components/NavBar/NavBar'
// routes
import RoutePublic from '../../configs/RoutePublic'
import RoutePrivate from '../../configs/RoutePrivate'
// pages
import Home from './Home/Home'
import Product from './Product/Product'
import Cart from './Cart/Cart'
import History from './History/History'
import Detail from './Detail/Detail'
import Profile from './Profile/Profile'
import NotFound from '../NotFound/NotFound'
import ScrollTop from '../../components/ScrollTop/ScrollTop'
// style
// import style from './Main.module.css'
// import { useState } from 'react'

const Main = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  const { path } = useRouteMatch()
  return (
    <div>
      <NavBar />
      <Switch>
        <RoutePublic component={Home} path={`${path}`} exact />
        <RoutePrivate
          component={Product}
          path={`${path}/product`}
          exact
        />
        <RoutePrivate component={Detail} path={`${path}/product/:id`} exact />
        <RoutePrivate component={Cart} path={`${path}/cart`} exact />
        <RoutePrivate component={History} path={`${path}/history`} exact />
        <RoutePrivate component={Profile} path={`${path}/profile`} exact />
        <Route component={NotFound} />
      </Switch>
      <ScrollTop />
    </div>
  )
}

export default Main
