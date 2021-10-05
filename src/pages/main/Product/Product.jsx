import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import style from './Product.module.css'

class Product extends Component {
  render() {
    return (
      <Container fluid>
        <Row className={style.page}>
          <Col md="3" className={style.sidebar}>
            <h1>Sidebar</h1>
          </Col>
          <Col md="9">
            <h1>Product Page</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Product;