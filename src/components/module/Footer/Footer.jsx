import React from 'react'
// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'
// style
import style from './Footer.module.css'
// assets
import logo from '../../../assets/icon.svg'
import icon_fb from '../../../assets/icon_fb.svg'
import icon_tw from '../../../assets/icon_tw.svg'
import icon_ig from '../../../assets/icon_ig.svg'

const Footer = () => {
  return (
    <div className={style.bg}>
      <Container>
        <Row className={style.main}>
          <Col md="4" className={style.left}>
            <div className={`${style.brand}`}>
              <img
                alt="CoffeeTeria_logo"
                height='33px'
                width='30px'
                src={logo}
              />
              <span>
                CoffeeTeria
              </span>
            </div>
            <div className={`${style.desc}`}>
              <p>
                CoffeeTeria is a store that sells some good<br />
                meals, and especially coffee. We provide<br />
                high quality beans
              </p>
              <div>
                <img className={`${style.btn_share}`} src={icon_fb} alt='btn_fb' />
                <img className={`${style.btn_share}`} src={icon_tw} alt='btn_tw' />
                <img className={`${style.btn_share}`} src={icon_ig} alt='btn_ig' />
              </div>
              <span>
                @2022CoffeeTeria
              </span>
            </div>
          </Col>
          <div className={`col-md-4 ${style.right}`}>
            <div className={`${style.section}`}>
              <b className={`${style.title}`}>Product</b>
              <span>Download</span>
              <span>Pricing</span>
              <span>Locations</span>
              <span>Countries</span>
              <span>Blog</span>
            </div>
            <div className={`${style.section}`}>
              <b className={`${style.title}`}>Engage</b>
              <span>CoffeeTeria ?</span>
              <span>FAQ</span>
              <span>About Us</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </Row>
      </Container>
    </div >
  )
}

export default Footer
