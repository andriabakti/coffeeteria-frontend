import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Cards from '../../../components/base/Cards/Cards';
import style from './Product.module.css'

class Product extends Component {
  constructor() {
    super()
    this.state = {
      menu: []
    }
  }

  getData = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/menu/?limit=12`)
      .then((res) => {
        this.setState({
          menu: res.data.data
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { menu } = this.state
    return (

      <Container fluid>
        <Row className={`text-center ${style.page}`}>
          <Col md="3" className={`${style.sidebar}`}>
            <h1>Sidebar</h1>
          </Col>
          <Col md="9">
            <Container className={style.menu}>
              {
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