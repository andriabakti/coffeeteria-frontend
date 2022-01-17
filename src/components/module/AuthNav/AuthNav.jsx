import React from 'react'
// react-router
import { useLocation, useHistory, Link } from 'react-router-dom'
// components
import Button from '../../base/Button/Button'
// style
import style from './AuthNav.module.css'
// assets
import logo from '../../../assets/icon.svg'

const AuthNav = () => {
  let { pathname } = useLocation()
  let { location } = useHistory()

  return (
    <nav className={`navbar navbar-expand-md ${style.nav}`}>
      <div className='container'>
        <Link to='/' className='navbar-brand align-top'>
          <img alt='CoffeeTeria_logo' height='33px' width='30px' src={logo} />
          <span className={`${style.brand}`}>CoffeeTeria</span>
        </Link>
        <Link
          to={
            location.pathname === '/auth/sign-up'
              ? '/auth/sign-in'
              : '/auth/sign-up'
          }>
          <Button
            text={pathname === '/auth/sign-up' ? 'Login' : 'Sign Up'}
            type='button'
            color='yellow'
          />
        </Link>
      </div>
    </nav>
  )
}

export default AuthNav
