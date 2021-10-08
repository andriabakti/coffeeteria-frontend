import React from 'react'
import { Container, Nav, Navbar as NavBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  return (
    <NavBar variant="light" className={style.navbar}>
      <Container>
        <NavBar.Brand>
          <Link to="/" style={link}>
            CoffeeTeria
          </Link>
        </NavBar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/" style={link}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/product" style={link}>
              Product
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/cart" style={link}>
              Your Cart
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/history" style={link}>
              History
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Navbar
