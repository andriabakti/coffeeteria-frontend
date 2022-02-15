import React from 'react'
// react-router
import { useLocation, useHistory, Link } from 'react-router-dom'
// style
import style from './NavAuth.module.css'
// assets
import logo from '../../assets/icons/icon.svg'

export const NavAuth = () => {
  let { pathname } = useLocation()
  let { location } = useHistory()

  return (
    <nav className={`navbar navbar-expand-lg bg-white ${style.nav}`}>
      <div className={`container ${style.container}`}>
        <Link to='/' className={`navbar-brand ${style.brand}`}>
          <img alt='CoffeeTeria' height='30px' width='30px' src={logo} />
          <span>CoffeeTeria</span>
        </Link>
        <Link
          to={
            location.pathname === '/auth/sign-up'
              ? '/auth/sign-in'
              : '/auth/sign-up'
          }
          className={`navbar-item`}
        >
          <button
            className={`btn ${style.btn_gold}`}
            type='button'
          >
            {pathname === '/auth/sign-up' ? 'Login' : 'Sign Up'}
          </button>
        </Link>
      </div>
    </nav >
  )
}
