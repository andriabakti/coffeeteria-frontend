import React from 'react'
// modules: numeral-formatter
import { numFormatter } from '../../../utils/numeral'
// assets: image
import blank from '../../../assets/images/blank_img.jpg'
// styles: module
import style from './CardHistory.module.css'

export const CardHistory = (props) => {
  const totalPrice = numFormatter(props.price * props.quantity)
  return (
    <div className={`card ${style.wrapper}`}>
      <div className={style.img_body}>
        <img
          src={props.image ? props.image : blank}
          alt='product_img'
          className={style.img}
        />
      </div>
      <div className={`card-body text-start ${style.text}`}>
        <h5 className={`card-title`}>{props.name}</h5>
        <span className={`mb-0`}>IDR {totalPrice}</span>
        <span className={`card-text mb-auto`}>
          Delivered
        </span>
      </div>
    </div >
  )
}
