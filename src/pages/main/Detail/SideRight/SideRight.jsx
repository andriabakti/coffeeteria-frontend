import React, { useState } from 'react'
// react-router
import { useHistory } from 'react-router-dom'
// style
import style from './SideRight.module.css'
// numeral
// import numeral from 'numeral'
import { useSelector } from 'react-redux'
import { numFormatter } from '../../../../utils/numeral'

export const SideRight = ({ detail, addToCart }) => {
  const { profile } = useSelector((state) => state.auth)
  const history = useHistory()

  const [size, setSize] = useState('')
  const [delivery, setDelivery] = useState('')
  const [quantity, setQuantity] = useState(0)

  const sizePick = (e) => {
    setSize(e.target.value)
  }

  const deliveryPick = (e) => {
    setDelivery(e.target.value)
  }
  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    setQuantity(quantity - 1)
  }

  const checkOut = () => {
    history.push('/main/cart')
  }

  return (
    <div className={`col-md-5 ${style.section}`}>
      <div className={style.detail}>
        <h6 className={`${style.title}`}>{detail.name}</h6>
        <h3>IDR {numFormatter(detail.price)}</h3>
        <div className={style.desc}>
          {!detail.description
            ? 'There is no any description yet for this product.'
            : detail.description}
        </div>
      </div>
      <div className={style.option}>
        <select
          className={`mb-4 form-select ${style.dropdown}`}
          aria-label='Default select'
          onChange={(e) => sizePick(e)}
          disabled={
            (detail.category_id !== 1 ||
              detail.category_id !== 2 ||
              profile.role === 'admin') &&
            'disabled'
          }
          defaultValue='Select Size'
          required>
          <option disabled hidden>
            Select Size
          </option>
          <option value='Regular'>R</option>
          <option value='Large'>L</option>
          <option value='Extra Large'>XL</option>
        </select>
        <select
          className={`mb-4 form-select ${style.dropdown}`}
          aria-label='Default select'
          onChange={(e) => deliveryPick(e)}
          defaultValue='Select Delivery Methods'
          disabled={profile.role === 'admin' && 'disabled'}
          required>
          <option disabled hidden>
            Select Delivery Methods
          </option>
          <option value='Dine-in'>Dine in</option>
          <option value='Door Delivery'>Door Delivery</option>
          <option value='Pick-up'>Pick up</option>
        </select>
        <div className={`mb-4 ${style.amount}`}>
          <div className={`col-md-4 btn-group ${style.counter}`} role='group'>
            <button
              className='btn btn-white'
              type='button'
              disabled={profile.role === 'admin' && 'disabled'}
              onClick={increase}>
              +
            </button>
            <div className='btn bg-white'>
              <b>{quantity}</b>
            </div>
            <button
              className={`btn btn-white ${quantity === 0 && 'disabled'}`}
              type='button'
              disabled={profile.role === 'admin' && 'disabled'}
              onClick={decrease}>
              -
            </button>
          </div>
          {detail.category_id !== 1 || detail.category_id !== 2 ? (
            <button
              className={`col-md-7 btn ${style.btn_gold}
            ${(delivery === '' || quantity === 0) && 'disabled'}`}
              type='submit'
              onClick={() => addToCart({ size, delivery, quantity })}>
              Add to Cart
            </button>
          ) : (
            <button
              className={`col-md-7 btn ${style.btn_gold}
            ${(size === '' || delivery === '' || quantity === 0) && 'disabled'
                }`}
              type='submit'
              onClick={() => addToCart({ size, delivery, quantity })}>
              Add to Cart
            </button>
          )}
        </div>
        <button
          className={`btn ${style.btn_brown}`}
          type='button'
          onClick={checkOut}>
          Checkout
        </button>
      </div>
    </div>
  )
}