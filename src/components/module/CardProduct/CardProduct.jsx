import React, { useState } from 'react'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { deleteProduct } from '../../../redux/actions/product'
// modules: numeral-formatter
import { numFormatter } from '../../../utils/numeral'
// components: base
import { ModalConfirm } from '../../base/ModalConfirm/ModalConfirm'
// assets: image
import blank from '../../../assets/images/blank_img.jpg'
// assets: icon
import icon_edit from '../../../assets/icons/icon_edit.svg'
// styles: module
import style from './CardProduct.module.css'

export const CardProduct = ({ id, name, price, image, clickEvent }) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleDelete = async (itemId) => {
    await dispatch(deleteProduct(itemId))
    alert('Product deleted successfully!')
    history.push('/main/product')
    // handleOpen()
  }
  return (
    <>
      <div
        className={`card border-0 position-relative ${user.role === 'admin' ? style.content : style.container
          }`}
        onClick={user.role !== 'admin' ? clickEvent : undefined}>
        <img
          className={`${style.image}`}
          src={image ? image : blank}
          alt='product'
        />
        <div className={`card-body text-center ${style.body}`}>
          <h5 className='card-title'>{name}</h5>
          <span className='card-text'>IDR {numFormatter(price)}</span>
        </div>
        {user.role === 'admin' && (
          <button
            className={`btn position-absolute top-50 start-100 translate-middle ${style.btn_delete}`}
            onClick={handleOpen}>
            <i className='fas fa-trash-alt' style={{ color: '#ffffff' }}></i>
          </button>
        )}
        {user.role === 'admin' && (
          <button
            className={`btn position-absolute top-100 start-100 translate-middle ${style.btn_edit}`}
            onClick={clickEvent}>
            <img src={icon_edit} alt='edit' />
          </button>
        )}
      </div>
      <ModalConfirm
        show={open}
        onHide={handleOpen}
        text='delete this product'
        eventClick={() => handleDelete(id)}
        btnBack='Cancel'
        btnConfirm='Delete'
      />
    </>
  )
}
