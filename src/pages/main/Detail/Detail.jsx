import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../../redux/actions/product'

import Button from '../../../components/base/Button/Button'

import style from './Detail.module.css'
import img from '../../../assets/item_detail.png'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { detail } = useSelector(state => state.items)

  const getDataDetail = () => {
    dispatch(getDetail(id))
  }

  useEffect(() => {
    getDataDetail()
  })

  return (
    <div className={`${style.page}`}>
      <div className={`container`}>
        <div className='row h-100'>
          <div className={`col-md-5 ${style.left}`}>
            <h1>{detail.name}</h1>
            <p>Favorite & Promo &gt; Cold Brew </p>
            <img src={img} alt='' height='550px' width='400px' />
            <p>
              Delivery only on{' '}
              <b>
                Monday to
                <br />
                friday at 1-7 pm
              </b>
            </p>
          </div>
          <div className={`col-md-7 ${style.right}`}>
            <div className={style.detail}>
              <h1>
                <b>COLD BREW</b>
              </h1>
              <h3>IDR 30.000</h3>
              <div>
                <span className={style.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, ipsa necessitatibus. Quasi architecto dicta dolore
                  amet vitae, quam voluptatem eaque eligendi adipisci animi quis
                  fuga illum iste.
                </span>
              </div>
            </div>
            <div className={style.option}>
              <select
                className={`form-select ${style.dropdown}`}
                aria-label='Default select example'>
                <option selected>Select Size</option>
                <option value='1'>R</option>
                <option value='2'>L</option>
                <option value='3'>XL</option>
              </select>
              <select
                className={`form-select ${style.dropdown}`}
                aria-label='Default select example'>
                <option selected>Select Delivery Methods</option>
                <option value='1'>Dine in</option>
                <option value='2'>Door Delivery</option>
                <option value='3'>Pick up</option>
              </select>
              <div className={`mb-3 ${style.amount}`}>
                <div className={`btn-group ${style.counter}`} role='group'>
                  <button type='button' className='btn btn-light'>
                    +
                  </button>
                  <button type='button' className='btn btn-light disabled'>
                    <b>2</b>
                  </button>
                  <button type='button' className='btn btn-light'>
                    -
                  </button>
                </div>
                <Button text='Add to Cart' type='button' color='gold' />
              </div>
              <Button text='Checkout' type='button' color='brown' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
