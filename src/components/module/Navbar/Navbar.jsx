import React from 'react'
// react-router
import { Link, useLocation } from 'react-router-dom'
// react-bootstrap
import { Container, Nav } from 'react-bootstrap'
// components
import Button from '../../base/Button/Button'
// style
import style from './navbar.module.css'
// assets
import logo from '../../../assets/icon.svg'
import none from '../../../assets/default.jpg'

const Navbar = () => {
  const { pathname } = useLocation()
  const token = localStorage.getItem('token')
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  return (
    <nav className={`navbar navbar-expand-md bg-white ${style.nav}`}>
      <Container className={`${style.container}`}>
        <div className={`col-lg-4 ${style.left}`}>
          <Link to='/main' className='navbar-brand'>
            <img alt='CoffeeTeria_logo' height='33px' width='30px' src={logo} />
            <span className={`${style.brand}`}>CoffeeTeria</span>
          </Link>
        </div>
        <div className={`navbar-nav col-lg-4 ${style.center}`}>
          <Nav.Link>
            <Link
              to='/main'
              style={link}
              className={
                pathname === '/main' ? `${style.page_on}` : `${style.page}`
              }>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
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
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/main/cart'
              style={link}
              className={
                pathname === '/main/cart' ? `${style.page_on}` : `${style.page}`
              }>
              Your Cart
            </Link>
          </Nav.Link>
          <Nav.Link>
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
          </Nav.Link>
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
              <img src={none} alt='profile' width='35px' height='35px' />
            </Link>
          </div>
        ) : (
          <div className={`col-lg-4 navbar-item ${style.right}`}>
            <Link to='/auth/sign-in' style={link} className={`${style.login}`}>
              Login
            </Link>
            <Link to='/auth/sign-up'>
              <Button text='Sign Up' type='button' color='gold' />
            </Link>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
