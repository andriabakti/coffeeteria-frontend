import React from 'react'
// react-router
import { Switch, Redirect, useRouteMatch } from 'react-router-dom'
// react-custom-scrollbars
// import { Scrollbars } from 'react-custom-scrollbars-2'
// components
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import AuthNav from '../../components/module/AuthNav/AuthNav'
import Footer from '../../components/module/Footer/Footer'
import ButtonUp from '../../components/module/ButtonUp/ButtonUp'
// routes
import PublicRoute from '../../configs/PublicRoute'
// style
import style from './auth.module.css'

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
            <PublicRoute
              component={SignUp}
              path={`${path}/sign-up`}
              restricted={true}
              exact
            />
            <PublicRoute
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
      <ButtonUp />
    </div>
  )
}

export default Auth
