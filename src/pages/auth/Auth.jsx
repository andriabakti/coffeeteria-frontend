import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom'

import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

import AuthNav from '../../components/module/AuthNav/AuthNav'

import style from './auth.module.css'
import PublicRoute from '../../configs/PublicRoute';

class Auth extends Component {
  render() {
    const { path } = this.props.match
    return (
      <div className={`container-fluid ${style.con}`}>
        <div className='row'>
          <div className={`col-md-6 ${style.bg}`}>
          </div>
          <div className={`col-md-6 px-0`}>
            <AuthNav />
            <Switch>
              <PublicRoute component={SignUp} path={`${path}/sign-up`} exact restricted={true} />
              <PublicRoute component={SignIn} path={`${path}/sign-in`} exact restricted={true} />
              <Redirect from="/auth" to={`${path}/sign-up`} />
            </Switch>
          </div>
        </div>
      </div >
    );
  }
}

export default Auth;