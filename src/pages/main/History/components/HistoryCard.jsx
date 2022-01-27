import React from 'react'
// style
import style from './history_card.module.css'
// assets
import img from '../../../../assets/default.jpg'

const HistoryCard = () => {
  return (
    <div className={`card mb-4 ${style.cards}`}>
      <div className={`row g-0`}>
        <div className={`col-lg-4`}>
          <div className={`${style.img_body}`}>
            <img src={img} alt="product_img" className={`${style.img}`} />
          </div>
        </div>
        <div className={`col-lg-8`}>
          <div className={`card-body text-start ${style.text}`}>
            <h5 className={`card-title`}>Product Name</h5>
            <p className={`mb-0`}>IDR 00.000</p>
            <div className={`${style.check}`}>
              <p className={`card-text mb-auto`}>
                Status
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

export default HistoryCard
