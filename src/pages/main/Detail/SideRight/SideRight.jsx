import React from 'react'
// react-router
import { useHistory } from 'react-router-dom'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// redux
import { increaseCount, decreaseCount } from '../../../../redux/actions/cart'
// style
import style from './side_right.module.css'
// numeral
import numeral from 'numeral'

const SideRight = (props) => {
  numeral.locale('es')
  const price = numeral(props.price)
  const history = useHistory()
  const { count } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(increaseCount())
  }

  const decrease = () => {
    dispatch(decreaseCount())
  }

  const checkOut = () => {
    history.push('/main/cart')
  }

  return (
    <div className={`col-md-5 ${style.section}`}>
      <div className={style.detail}>
        <h6 className={`${style.title}`}>
          {props.name}
        </h6>
        <h3>IDR {price.format('0,0')}</h3>
        <div className={style.desc}>
          {!props.desc
            ? 'There is no any description yet for this product.'
            : props.desc}
        </div>
      </div>
      <div className={style.option}>
        <select
          className={`mb-4 form-select ${style.dropdown}`}
          aria-label='Default select'>
          <option selected disabled hidden>
            Select Size
          </option>
          <option value='R'>R</option>
          <option value='L'>L</option>
          <option value='XL'>XL</option>
        </select>
        <select
          className={`mb-4 form-select ${style.dropdown}`}
          aria-label='Default select'>
          <option selected disabled hidden>
            Select Delivery Methods
          </option>
          <option value='Dine in'>Dine in</option>
          <option value='Door Delivery'>Door Delivery</option>
          <option value='Pick up'>Pick up</option>
        </select>
        <div className={`mb-4 ${style.amount}`}>
          <div className={`col-md-4 btn-group ${style.counter}`} role='group'>
            <button className='btn btn-white' type='button' onClick={increase} >
              +
            </button>
            <div className='btn btn-white'>
              <b>{count}</b>
            </div>
            <button className={`btn btn-white ${count === 0 && 'disabled'}`} type='button' onClick={decrease}>
              -
            </button>
          </div>
          <button className={`col-md-7 btn ${style.btn_gold}`} type='submit'>
            Add to Cart
          </button>
        </div>
        <button className={`btn ${style.btn_brown}`} type='button' onClick={checkOut}>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default SideRight
