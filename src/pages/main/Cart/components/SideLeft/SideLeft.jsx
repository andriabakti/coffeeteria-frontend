import React from 'react'
// style
import style from './SideLeft.module.css'
// assets
import img from '../../../../../assets/default.jpg'

const SideLeft = () => {
  return (
    <div className={`col-md-6`}>
      <div className={`card ${style.container}`}>
        <h2 className={`text-center ${style.title}`}>
          Order Summary
        </h2>
        <div className={`${style.list}`}>
          <div className={`${style.items_list}`}>
            <div className={`${style.img}`}>
              <img
                alt='items_img'
                height='90px'
                width='80px'
                src={img}
              />
            </div>
            <div className={`${style.amount}`}>
              <span>Hazelnut Latte</span>
              <span>x 1</span>
              <span>Regular</span>
            </div>
            <span>IDR 24.0</span>
          </div>
        </div>
        <hr />
        <div className={`${style.list}`}>
          <div className={`${style.detail}`}>
            <span>SUBTOTAL</span>
            <span>IDR 24.000</span>
          </div>
          <div className={`${style.detail}`}>
            <span>TAX & FEES</span>
            <span>IDR 20.000</span>
          </div>
          <div className={`${style.detail}`}>
            <span>SHIPPING</span>
            <span>IDR 10.000</span>
          </div>
          <div className={`${style.detail} ${style.total}`}>
            <h4>TOTAL</h4>
            <h4>IDR 54.000</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideLeft
