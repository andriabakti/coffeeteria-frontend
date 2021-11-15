import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'

import Button from '../../base/Button/Button'
import logo from '../../../assets/icon.svg'

import style from './auth_nav.module.css'

const AuthNav = () => {
  let { pathname } = useLocation()
  let { location } = useHistory()
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }

  return (
    <nav className={`navbar ${style.nav}`}>
      <div className='container'>
        <div>
          <Link to='/' style={link}>
            <img
              src={logo}
              alt='logo'
              className='align-top'
              height='33'
              width='30'
            />
            <span className={`navbar-brand ${style.brand}`}>
              CoffeeTeria
            </span>
          </Link>
        </div>
        <Link
          to={
            location.pathname === '/auth/sign-up'
              ? '/auth/sign-in'
              : '/auth/sign-up'
          }>
          <Button
            text={pathname === '/auth/sign-up' ? 'Sign In' : 'Sign Up'}
            type='button'
            color='yellow'
          />
        </Link>
      </div>
    </nav>
  )
}

export default AuthNav
