import React from 'react'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// redux
import { removeItem } from '../../../../../redux/actions/cart'
// style
import style from './side_left.module.css'
// assets
import img from '../../../../../assets/default.jpg'
// numeral
// import numeral from 'numeral'
import { numFormatter } from '../../../../../utils/numeral'

const SideLeft = () => {
  // numeral.locale('es')
  const { cart, subTotal, taxAndFee, shipping, total } = useSelector(
    (state) => state.cart
  )
  const dispatch = useDispatch()

  const handleDelete = (idx) => {
    dispatch(removeItem(idx))
  }
  return (
    <div className={`col-md-6`}>
      <div className={`card ${style.container}`}>
        <h2 className={`text-center ${style.title}`}>Order Summary</h2>
        <div className={`${style.list}`}>
          {cart.length <= 0 ? (
            <div className=''>
              <h4 className={`text-center ${style.title}`}>
                There's no item in your cart
              </h4>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                className={`position-relative ${style.items_list}`}
                key={index}>
                <div className={`${style.img}`}>
                  <img src={!item.image ? img : item.image} alt='product' />
                </div>
                <div className={`${style.amount}`}>
                  <span>{item.name}</span>
                  <span>x {item.quantity}</span>
                  <span>{item.size}</span>
                </div>
                <span>
                  IDR {numFormatter(item.price * item.quantity)}
                </span>
                <button
                  className={`btn btn-warning position-absolute top-0 start-100 translate-middle border ${style.btn_delete}`}
                  onClick={() => handleDelete(index)}>
                  <i
                    className='fas fa-trash-alt'
                    style={{ color: '#6A4029' }}></i>
                </button>
              </div>
            ))
          )
          }
        </div>
        <hr />
        <div className={`${style.list}`}>
          <div className={`${style.detail}`}>
            <span>SUBTOTAL</span>
            <span>IDR {numFormatter(subTotal)}</span>
          </div>
          <div className={`${style.detail}`}>
            <span>TAX & FEES</span>
            <span>IDR {numFormatter(taxAndFee)}</span>
          </div>
          <div className={`${style.detail}`}>
            <span>SHIPPING</span>
            <span>IDR {numFormatter(shipping)}</span>
          </div>
          <div className={`${style.detail} ${style.total}`}>
            <h4>TOTAL</h4>
            <h4>IDR {numFormatter(total)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideLeft
