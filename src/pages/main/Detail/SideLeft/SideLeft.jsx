import React from 'react'
// style
import style from './SideLeft.module.css'
// assets
import img from '../../../../assets/images/blank_img.jpg'
// import { useSelector } from 'react-redux'

export const SideLeft = (props) => {
  // const { detail } = useSelector((state) => state.product)

  return (
    <div className={`col-md-6 ${style.section}`}>
      <input type="file" name="image" id="image" onChange={props.changeImage} />
      <div className={`${style.img}`}>
        {props.image ? (
          <img src={props.image} alt='item_img' />
        ) : (
          <img src={img} alt='item_img' />
        )}
      </div>
      <span className={`${style.text}`}>
        Delivery only on <b>Monday to Friday</b>
        <br />
        at <strong>01:00 - 07:00 PM</strong>
      </span>
    </div>
  )
}

