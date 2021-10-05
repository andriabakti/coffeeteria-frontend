import React from 'react'
import { Container, Nav, Navbar as NavBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <NavBar variant="light" className={style.navbar}>
      <Container>
        <NavBar.Brand>
          <Link to="/menu">
            CoffeeTeria
          </Link>
        </NavBar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#products">Home</Nav.Link>
          <Nav.Link>
            <Link to="/menu">Menu</Link>
          </Nav.Link>
          <Nav.Link href="#cart">Your Cart</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  )
}

export default Navbar
