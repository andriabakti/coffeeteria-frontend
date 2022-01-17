import React, { Component } from 'react'
// react-router
import { Switch, Redirect } from 'react-router-dom'
// components
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import AuthNav from '../../components/module/AuthNav/AuthNav'
// routes
import PublicRoute from '../../configs/PublicRoute'
// style
import style from './Auth.module.css'

class Auth extends Component {
  render() {
    const { path } = this.props.match
    return (
      <div className={`container-fluid ${style.container}`}>
        <div className='row'>
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
      </div >
    )
  }
}

export default Auth
