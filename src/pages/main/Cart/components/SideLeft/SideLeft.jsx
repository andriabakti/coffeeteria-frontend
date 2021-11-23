import React from 'react'

import style from './SideLeft.module.css'
import img from '../../../../../assets/default.jpg'

const SideLeft = () => {
  return (
    <div className={`col-md-5 ${style.left_side}`}>
      <div className={`card ${style.card}`}>
        <h2 className={`text-center ${style.title}`}><b>Order Summary</b></h2>
        <div className={`${style.list}`} >
          <div className={`${style.items_list}`}>
            <div className={`${style.img}`}>
              <img src={img} alt="items_img" height='80px' width='80px' className='rounded' />
            </div>
            <div className={`${style.detail}`}>
              <span>Hazelnut Latte</span>
              <span>x 1</span>
              <span>Regular</span>
            </div>
            <span>IDR 24.0</span>
          </div>
          <div className={`${style.items_list}`}>
            <div className={`${style.img}`}>
              <img src={img} alt="items_img" height='80px' width='80px' className='rounded' />
            </div>
            <div className={`${style.detail}`}>
              <span>Chicken Fire Wings</span>
              <span>x 2</span>
            </div>
            <span>IDR 30.0</span>
          </div>
        </div>
        <hr />
        <div className={`${style.list}`}>
          <div className={`${style.amount}`}>
            <span>SUBTOTAL</span>
            <span>IDR 120.000</span>
          </div>
          <div className={`${style.amount}`}>
            <span>TAX & FEES</span>
            <span>IDR 20.000</span>
          </div>
          <div className={`${style.amount}`}>
            <span>SHIPPING</span>
            <span>IDR 10.000</span>
          </div>
          <hr />
          <div className={`${style.amount}`}>
            <h4>TOTAL</h4>
            <h4>IDR 150.000</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideLeft
