import React from 'react'
// pkgs: react-router
import { Route, Switch, useRouteMatch } from 'react-router-dom'
// pkgs: react-redux
// import { useSelector } from 'react-redux'
// components: module
import { NavBar } from '../../components/module/NavBar/NavBar'
import { Footer } from '../../components/module/Footer/Footer'
import { ScrollTop } from '../../components/module/ScrollTop/ScrollTop'
// components: route
import { RoutePublic } from '../../configs/RoutePublic'
import { RoutePrivate } from '../../configs/RoutePrivate'
// components: page
import { Home } from './Home/Home'
import { Product } from './Product/Product'
import { Detail } from './Detail/Detail'
import { Create } from './Create/Create'
import { Cart } from './Cart/Cart'
import { History } from './History/History'
import { Profile } from './Profile/Profile'
import { NotFound } from '../NotFound/NotFound'

export const Main = () => {
  // modules
  const { path } = useRouteMatch()
  // const { user } = useSelector((state) => state.user)
  // const { params } = useSelector((state) => state.product)
  // const paramsId = parseInt(params)
  // let id
  // if (isNaN(paramsId)) {
  //   id = null
  // }
  // console.log(paramsId)
  // functions
  window.scrollTo(0, 0, 'smooth')

  return (
    <>
      <NavBar />
      <Switch>
        <RoutePublic component={Home} path={`${path}`} exact />
        <RoutePrivate component={Product} path={`${path}/product`} exact />
        {/* {(id !== null || params === '') && ( */}
        <RoutePrivate component={Detail} path={`${path}/product/:id`} exact />
        {/* )} */}
        {/* {user.role === 'admin' && ( */}
        <RoutePrivate component={Create} path={`${path}/new-product`} exact />
        {/* )} */}
        <RoutePrivate component={Cart} path={`${path}/cart`} exact />
        <RoutePrivate component={History} path={`${path}/history`} exact />
        <RoutePrivate component={Profile} path={`${path}/profile`} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ScrollTop />
    </>
  )
}
