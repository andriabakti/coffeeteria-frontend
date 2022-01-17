import React from 'react'
// react-router
import { Link, useLocation } from 'react-router-dom'
// react-bootstrap
import { Container, Nav } from 'react-bootstrap'
// components
import Button from '../../base/Button/Button'
// style
import style from './Navbar.module.css'
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
      <Container>
        <Link to='/main' className='navbar-brand'>
          <img alt='CoffeeTeria_logo' height='33px' width='30px' src={logo} />
          <span className={`${style.brand}`}>CoffeeTeria</span>
        </Link>
        <div className='navbar-nav mx-auto'>
          <Nav.Link>
            <Link
              to='/main'
              style={link}
              className={
                pathname !== '/main' ? `${style.page}` : `${style.page_on}`
              }>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/main/product'
              style={link}
              className={
                pathname !== '/main/product'
                  ? `${style.page}`
                  : `${style.page_on}`
              }>
              Product
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/main/cart'
              style={link}
              className={
                pathname !== '/main/cart' ? `${style.page}` : `${style.page_on}`
              }>
              Your Cart
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to='/main/history'
              style={link}
              className={
                pathname !== '/main/history'
                  ? `${style.page}`
                  : `${style.page_on}`
              }>
              History
            </Link>
          </Nav.Link>
        </div>
        {token ? (
          <div className='navbar-nav'>
            <Link to='/main/profile' className={`${style.profile}`}>
              <img src={none} alt='profile' width='35px' height='35px' />
            </Link>
          </div>
        ) : (
          <div className={`navbar-item ${style.auth}`}>
            <Link to='/auth/sign-in' style={link} className={`${style.login}`}>
              Login
            </Link>
            <Link to='/auth/sign-up'>
              <Button
                text='Sign Up'
                type='button'
                color='yellow' />
            </Link>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
