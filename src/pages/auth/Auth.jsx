import React from 'react'
// react-router
import { Switch, Redirect, useRouteMatch } from 'react-router-dom'
// components
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import AuthNav from '../../components/NavAuth/NavAuth'
import Footer from '../../components/Footer/Footer'
import ScrollTop from '../../components/ScrollTop/ScrollTop'
// routes
import RoutePublic from '../../configs/RoutePublic'
// style
import style from './Auth.module.css'

const Auth = () => {
  window.scrollTo(0, 0)

  const { path } = useRouteMatch()
  return (
    <div>
      <div className={`row m-0 ${style.upper}`}>
        <div className={`col-md-6 ${style.bg}`}>
        </div>
        <div className={`col-md-6 px-0`}>
          <AuthNav />
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
    </div>
  )
}

export default Auth
