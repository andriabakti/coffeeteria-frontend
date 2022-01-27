import React from 'react'
// style
import style from './side_left.module.css'
// assets
import img from '../../../../assets/default.jpg'

const SideLeft = (props) => {
  return (
    <div className={`col-md-6 ${style.section}`}>
      <div className={`${style.img}`}>
        {props.image ? (
          <img src={props.image} alt='item_img' width='400' height='auto' />
        ) : (
          <img src={img} alt='item_img' width='510' height='auto' />
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

export default SideLeft
