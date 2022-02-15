import React from 'react'
// modules: react-router
import { Switch, Redirect, useRouteMatch } from 'react-router-dom'
// components: route
import { RoutePublic } from '../../configs/RoutePublic'
// components: page
import { SignUp } from './SignUp/SignUp'
import { SignIn } from './SignIn/SignIn'
// components: module
import { NavAuth } from '../../components/NavAuth/NavAuth'
import { Footer } from '../../components/Footer/Footer'
import { ScrollTop } from '../../components/ScrollTop/ScrollTop'
// styles: module
import style from './Auth.module.css'

export const Auth = () => {
  // modules
  const { path } = useRouteMatch()
  // functions
  window.scrollTo(0, 0, 'smooth')

  return (
    <>
      <div className={`row m-0 ${style.upper}`}>
        <div className={`col-md-6 ${style.bg}`}>
        </div>
        <div className={`col-md-6 px-0`}>
          <NavAuth />
          <Switch>
            <RoutePublic
              component={SignUp}
              path={`${path}/sign-up`}
              restricted={true}
              exact
            />
            <RoutePublic
              component={SignIn}
              path={`${path}/sign-in`}
              restricted={true}
              exact
            />
            <Redirect from='/auth' to={`${path}/sign-up`} />
          </Switch>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </>
  )
}
