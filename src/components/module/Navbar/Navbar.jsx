import React from 'react'
// react-router
import { Link, useLocation } from 'react-router-dom'
// style
import style from './Navbar.module.css'
// assets
import logo from '../../../assets/icon.svg'
import blank from '../../../assets/blank_profile.jpg'

const Navbar = (props) => {
  const { pathname } = useLocation()
  const token = localStorage.getItem('token')
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-white ${style.nav}`}>
      <div className={`container ${style.container}`}>
        <div className={`col-lg-4`}>
          <Link to='/main' className={`navbar-brand ${style.brand}`} >
            <img alt='CoffeeTeria' height='30px' width='30px' src={logo} />
            <span>CoffeeTeria</span>
          </Link>
        </div>
        <div className={`navbar-nav col-lg-4 ${style.center}`}>
          <div className='nav-link'>
            <Link
              to='/main'
              style={link}
              className={
                pathname === '/main' ? `${style.page_on}` : `${style.page}`
              }>
              Home
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              to='/main/product'
              style={link}
              className={
                pathname !== '/main' &&
                  pathname !== '/main/product/' &&
                  pathname !== '/main/cart' &&
                  pathname !== '/main/history' &&
                  pathname !== '/main/profile'
                  ? `${style.page_on}`
                  : `${style.page}`
              }>
              Product
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              to='/main/cart'
              style={link}
              className={
                pathname === '/main/cart' ? `${style.page_on}` : `${style.page}`
              }>
              Your Cart
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              to='/main/history'
              style={link}
              className={
                pathname === '/main/history'
                  ? `${style.page_on}`
                  : `${style.page}`
              }>
              History
            </Link>
          </div>
        </div>
        {token ? (
          <div className={`col-lg-4 navbar-nav ${style.right}`}>
            <Link
              to='/main/profile'
              className={
                pathname === '/main/profile'
                  ? `${style.profile_on}`
                  : `${style.profile}`
              }>
              <img src={blank} alt='profile' />
            </Link>
          </div>
        ) : (
          <div className={`col-lg-4 navbar-nav ${style.right}`}>
            <div className='nav-link'>
              <Link to='/auth/sign-in' style={link} className={`${style.login}`}>
                Login
              </Link>
            </div>
            <Link to='/auth/sign-up'>
              <button
                className={`btn ${style.btn_gold}`}
                type='button'
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
