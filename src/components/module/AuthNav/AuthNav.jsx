import React from 'react'
import { useLocation } from 'react-router-dom'

import Button from '../../base/Button/Button'
import logo from '../../../assets/icon.svg'

import style from './auth_nav.module.css'

const AuthNav = () => {
  let { pathname } = useLocation()
  return (
    <nav className={`navbar ${style.nav}`}>
      <div className='container'>
        <div>
          <img
            src={logo}
            alt='logo'
            className='align-top'
            height='33'
            width='30'
          />
          <span className={`navbar-brand ${style.brand}`}>CoffeeTeria</span>
        </div>
        <Button
          text={pathname === '/auth/sign-up' ? 'Sign In' : 'Sign Up'}
          type='button'
        />
      </div>
    </nav>
  )
}

export default AuthNav
