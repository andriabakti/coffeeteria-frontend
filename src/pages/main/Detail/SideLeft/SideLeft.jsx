import React, { useRef } from 'react'
// pkgs: react-redux
import { useSelector } from 'react-redux'
// assets: image
import blank from '../../../../assets/images/blank_img.jpg'
// styles: module
import style from './SideLeft.module.css'

export const SideLeft = (props) => {
  const ref = useRef()
  const { user } = useSelector((state) => state.user)
  return (
    <div className={`col-md-6 ${style.section}`}>
      <input
        onChange={props.changeImage}
        type='file'
        name='image'
        id='image'
        ref={ref}
        hidden
      />
      <div className={`position-relative ${style.img}`}>
        {props.image ? (
          <img src={props.image} alt='item_img' />
        ) : (
          <img src={blank} alt='item_img' />
        )}
        {user.role === 'admin' && (
          <button
            className={`btn position-absolute top-0 end-0 ${style.btn_select}`}
            onClick={() => ref.current.click()}
            type='buttton'>
            <i className='fas fa-trash-alt'></i>
          </button>
        )}
      </div>
      {user.role !== 'admin' && (
        <span className={`${style.text}`}>
          Delivery only on <b>Monday to Friday</b>
          <br />
          at <strong>01:00 - 07:00 PM</strong>
        </span>
      )}
    </div>
  )
}
