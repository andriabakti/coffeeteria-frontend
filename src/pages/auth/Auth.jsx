import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

import Footer from '../../components/base/Footer/Footer'

import style from './auth.module.css'

class Auth extends Component {
  // constructor(props) {
  //   super(props)
  //   // console.log(props);
  // }
  render() {
    const { path } = this.props.match
    return (
      <div className={`container-fluid ${style.con}`}>
        <div className='row'>
          <div className={`col-md-4 ${style.bg}`}>
          </div>
          <div className={`col-md-8`}>
            <Switch>
              <Route component={SignUp} path={`${path}/sign-up`} exact />
              <Route component={SignIn} path={`${path}/sign-in`} exact />
              <Redirect from="/auth" to={`${path}/sign-up`} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div >
    );
  }
}

export default Auth;