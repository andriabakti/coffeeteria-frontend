import React from 'react'
// modules: numeral-formatter
import { numFormatter } from '../../../utils/numeral'
// assets: image
// import img from '../../../../assets/images/blank_img.jpg'
// styles: module
import style from './CardHistory.module.css'

export const CardHistory = (props) => {
  const totalPrice = numFormatter(props.price * props.quantity)
  return (
    <div className={`card mb-4 ${style.cards}`}>
      <div className={`row g-0`}>
        <div className={`col-lg-4`}>
          <div className={`${style.img_body}`}>
            <img
              src={props.image}
              alt='product_img'
              className={`${style.img}`}
            />
          </div>
        </div>
        <div className={`col-lg-8`}>
          <div className={`card-body text-start ${style.text}`}>
            <h5 className={`card-title`}>{props.name}</h5>
            <p className={`mb-0`}>IDR {totalPrice}</p>
            <div className={`${style.check}`}>
              <p className={`card-text mb-auto`}>
                {!props.status === 'COD' ? 'On Process' : 'Delivered'}
              </p>
              <input
                className={`form-check-input`}
                id='flexCheckDefault'
                type='checkbox'
                value=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
