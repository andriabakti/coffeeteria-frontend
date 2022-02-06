import React from 'react'
// style
import style from './Cards.module.css'
// assets
import none from '../../../assets/default.jpg'
import icon_edit from '../../../assets/icon_edit.svg'
// numeral
import numeral from 'numeral'
import { useSelector } from 'react-redux'

const Cards = ({ name, price, image, clickEvent }) => {
  const { profile } = useSelector((state) => state.auth)
  numeral.locale('es')
  const formatted = numeral(price).format('0,0')
  return (
    <div
      className={`card border-0 position-relative ${profile.role === 'admin' ? style.content : style.container}`}
      onClick={clickEvent}>
      <img
        className={`${style.image}`}
        src={image ? image : none}
        alt='product'
      />
      <div className={`card-body text-center ${style.body}`}>
        <h5 className='card-title'>{name}</h5>
        <span className='card-text'>IDR {formatted}</span>
      </div>
      {profile.role === 'admin' && (
        <button
          className={`btn position-absolute top-100 start-100 translate-middle ${style.btn_edit}`}
          onClick={clickEvent}>
          <img src={icon_edit} alt='edit' />
        </button>
      )}
    </div>
  )
}

export default Cards
