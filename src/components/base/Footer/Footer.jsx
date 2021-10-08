import React from 'react'
import { Container } from 'react-bootstrap'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.foot_bg}>
      <Container className={style.foot_body}>
        <h1>Footer</h1>
      </Container>
    </div>
  )
}

export default Footer
