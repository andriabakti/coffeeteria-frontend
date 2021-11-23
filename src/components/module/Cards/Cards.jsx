import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import style from './Cards.module.css'
import none from '../../../assets/default.jpg'

class Cards extends Component {
  render() {
    const { name, price, image, clickEvent } = this.props
    return (
      <Card className={style.content} onClick={clickEvent}>
        <Card.Img variant="top" src={image ? image : none} />
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