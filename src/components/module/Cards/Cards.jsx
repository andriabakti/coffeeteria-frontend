import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import style from './Cards.module.css'
import none from '../../../assets/default.jpg'

class Cards extends Component {
  render() {
    const { name, price } = this.props
    return (
      <Card className={style.content}>
        <Card.Img variant="top" src={none} />
        <Card.Body className={style.body}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;