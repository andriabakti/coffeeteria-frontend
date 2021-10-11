import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './Footer.module.css'
import logo from '../../../assets/icon.svg'

const Footer = () => {
  return (
    <div className={style.foot_bg}>
      <Container>
        <Row className={style.foot_body}>
          <Col md="9" className={style.left_side}>
            <div>
              <img src={logo}
                alt="CoffeeTeria logo"
              />{' '}
              <span>
                <b>CoffeeTeria</b>
              </span>
            </div>
            <div>
              <p>
                CoffeeTeria is a store that sells some good<br />
                meals, and especially coffee. We provide<br />
                high quality beans
              </p>
              <caption>
                @2021CoffeeStore
              </caption>
            </div>
          </Col>
          <Col md="3" className={style.right_side}>
            <div>
              <span>
                <b>Product</b>
              </span>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <span>
                <b>Engage</b>
              </span>
              <ul>
                <li>CoffeeTeria ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
