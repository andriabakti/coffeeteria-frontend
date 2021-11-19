import React from 'react'
import style from './HistoryCard.module.css'
import img from '../../../../assets/default.jpg'

const HistoryCard = () => {
  return (
    <div className={`card mb-4 ${style.cards}`}>
      <div className={`row g-0`}>
        <div className={`col-md-4`}>
          <div className={`${style.img_body}`}>
            <img src={img} alt="..." className={`${style.img}`} />
          </div>
        </div>
        <div className={`col-md-8`}>
          <div className={`card-body text-start ${style.text}`}>
            <h5 className={`card-title`}>Veggie tomato mix</h5>
            <p className={`mb-0`}>IDR 34.000</p>
            <div className={`${style.check}`}>
              <p className={`card-text mb-auto`}>
                Delivered
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
    </div >
  )
}

export default HistoryCard
