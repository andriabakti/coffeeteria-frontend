import React from 'react'
// style
import style from './cards.module.css'
// assets
import none from '../../../assets/default.jpg'
// numeral
import numeral from 'numeral'

const Cards = ({ name, price, image, clickEvent }) => {
  numeral.locale('es')
  const formatted = numeral(price).format('0,0')
  return (
    <div className={`card border-0 ${style.container}`} onClick={clickEvent}>
      <img className={`${style.image}`} src={image ? image : none} alt='product' />
      <div className={`card-body ${style.body}`}>
        <h5 className="card-title">{name}</h5>
        <span className='card-text'>IDR {formatted}</span>
      </div>
    </div>
  )
}

export default Cards
