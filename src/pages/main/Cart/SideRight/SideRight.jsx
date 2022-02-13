import React, { useState } from 'react'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// redux
import { resetCart } from '../../../../redux/actions/cart'
import { purchaseOrders } from '../../../../redux/actions/order'
// style
import style from './SideRight.module.css'
// assets
import icon_card from '../../../../assets/icons/icon_card.svg'
import icon_bank from '../../../../assets/icons/icon_bank.svg'
import icon_cash from '../../../../assets/icons/icon_cash.svg'
import { useHistory } from 'react-router-dom'

const SideRight = () => {
  const history = useHistory()
  const { cart, total } = useSelector((state) => state.cart)
  const { id } = useSelector((state) => state.auth.profile)
  const [payment, setPayment] = useState('')
  const dispatch = useDispatch()
  const paymentPick = (e) => {
    setPayment(e.target.value)
  }
  const handlePurchase = async (payment) => {
    await dispatch(purchaseOrders({ id, total, payment, items: cart }))
    alert('Items have purchased successfully')
    dispatch(resetCart())
    history.push('/main/product')
  }
  return (
    <div className={`col-md-5 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`${style.title}`}>
          <h4 className='text-white'>Address details</h4>
          <span className='text-white'>edit</span>
        </div>
        <div className={`card ${style.card}`}>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Delivery</b> to
            </li>
            <li className={`list-group-item ${style.address}`}>
              Iskandar Street km 5 refinery road oppsite republic road, effurun, Jakarta
            </li>
            <li className='list-group-item'>+62 81348287878</li>
          </ul>
        </div>
      </div>
      <div className={`${style.section} ${style.payment}`}>
        <h4 className='text-white'>Payment method</h4>
        <div className={`card ${style.card}`}>
          <div className={`list-group list-group-flush`}>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input'
                type='radio'
                value='Card'
                id='payment-1'
                name='payment'
              />
              <label className='form-check-label' htmlFor='payment-1'>
                <img
                  className={`${style.icon_pay} ${style.icon_card}`}
                  src={icon_card}
                  alt='icon_bank'
                />
                Card
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input'
                type='radio'
                value='Bank'
                id='payment-2'
                name='payment'
              />
              <label className='form-check-label' htmlFor='payment-2'>
                <img
                  className={`btn ${style.icon_pay} ${style.icon_bank}`}
                  src={icon_bank}
                  alt='icon_bank'
                />
                Bank account
              </label>
            </div>
            <div className={`list-group-item form-check ${style.pay_method}`}>
              <input
                onChange={(e) => paymentPick(e)}
                className='form-check-input'
                type='radio'
                value='COD'
                id='payment-3'
                name='payment'
              />
              <label className='form-check-label' htmlFor='payment-3'>
                <img
                  className={`btn ${style.icon_pay} ${style.icon_cash}`}
                  src={icon_cash}
                  alt='icon_bank'
                />
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`btn ${style.btn_brown}`}
        onClick={() => handlePurchase(payment)}
        type='button'
        disabled={payment === '' ? 'disabled' : ''}>
        Confirm and Pay
      </button>
    </div>
  )
}

export default SideRight
