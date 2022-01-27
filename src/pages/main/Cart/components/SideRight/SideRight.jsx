import React from 'react'
// style
import style from './side_right.module.css'
// assets
import icon_card from '../../../../../assets/icon_card.svg'
import icon_bank from '../../../../../assets/icon_bank.svg'
import icon_cash from '../../../../../assets/icon_cash.svg'

const SideRight = () => {
  return (
    <div className={`col-md-5 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`${style.title}`}>
          <h4 className='text-white'>Address details</h4>
          <span className='text-white'>edit</span>
        </div>
        <div className={`card ${style.card}`}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Delivery</b> to Iskandar Street
            </li>
            <li className="list-group-item">
              Km 5 refinery road oppsite republic road, effurun, Jakarta
            </li>
            <li className="list-group-item">
              +62 81348287878
            </li>
          </ul>
        </div>
      </div>
      <div className={`${style.section} ${style.payment}`}>
        <h4 className='text-white'>Payment method</h4>
        <div className={`card ${style.card}`}>
          <div className={`list-group list-group-flush`}>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input className="form-check-input" type="radio" name='payment' id='payment-1' />
              <label className='form-check-label' htmlFor='payment-1'>
                <img className={`${style.icon_pay} ${style.icon_card}`} src={icon_card} alt="icon_bank" />
                Card
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input className="form-check-input" type="radio" name='payment' id='payment-2' />
              <label className='form-check-label' htmlFor='payment-2'>
                <img className={`btn ${style.icon_pay} ${style.icon_bank}`} src={icon_bank} alt="icon_bank" />
                Bank account
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input className="form-check-input" type="radio" name='payment' id='payment-3' />
              <label className='form-check-label' htmlFor='payment-3'>
                <img className={`btn ${style.icon_pay} ${style.icon_cash}`} src={icon_cash} alt="icon_bank" />
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className={`btn ${style.btn_brown}`} type='button'>
        Confirm and Pay
      </button>
    </div>
  )
}

export default SideRight
