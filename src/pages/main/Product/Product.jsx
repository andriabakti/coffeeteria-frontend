import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Cards from '../../../components/base/Cards/Cards';
import style from './Product.module.css'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      menu: [],
      isLoading: false
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    axios.get(`${process.env.REACT_APP_BASE_URL}/menu/?limit=12`)
      .then((res) => {
        this.setState({
          menu: res.data.data,
          isLoading: false
        })
      }).catch((err) => {
        console.log(err.message)
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { menu, isLoading } = this.state
    return (

      <Container fluid>
        <Row className={`text-center ${style.page}`}>
          <Col md="3" className={`${style.sidebar}`}>
            <div className="mb-auto">
              <h4>Promo Today</h4>
              <p>Coupons will be updated every weeks.<br />
                Check them out!</p>
            </div>
            <div className={`${style.coupon}`}>
              <p>
                We are sorry,<br />
                the coupons are not available for now.
              </p>
            </div>
            <div className={style.terms}>
              <span>
                <b>
                  Terms and Codition
                </b>
              </span>
              <li>1. You can only apply 1 coupon per day</li>
              <li>2. It only for dine in</li>
              <li>3. Buy 1 get 1 only for new user</li>
              <li>4. Should make member card to apply coupon</li>
            </div>
          </Col>
          <Col md="9">
            <Container className={isLoading ? style.loading : style.menu}>
              {
                isLoading ?
                  <Spinner animation="border" variant="secondary" /> :
                  menu.map((item, index) => {
                    return (
                      <Col md="3">
                        <Cards key={index} name={item.name} price={item.price} />
                      </Col>
                    )
                  })
              }
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Product;