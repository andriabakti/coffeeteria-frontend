import React, { useState } from 'react'
// style
import style from './CardProduct.module.css'
// assets
import blank from '../../assets/images/blank_img.jpg'
import icon_edit from '../../assets/icons/icon_edit.svg'
// numeral
// import numeral from 'numeral'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, getProduct } from '../../redux/actions/product'
import { ModalDelete } from '../ModalDelete/ModalDelete'
import { numFormatter } from '../../utils/numeral'

export const CardProduct = ({ id, name, price, image, clickEvent }) => {
  // numeral.locale('es')
  // const formatted = numeral(price).format('0,0')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const { profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleDelete = async (itemId) => {
    await dispatch(deleteProduct(itemId))
    alert('Product deleted successfully!')
    await dispatch(getProduct(1, '', ''))
    handleOpen()
  }
  return (
    <>
      <div
        className={`card border-0 position-relative ${profile.role === 'admin' ? style.content : style.container
          }`}
        onClick={profile.role !== 'admin' ? clickEvent : undefined}>
        <img
          className={`${style.image}`}
          src={image ? image : blank}
          alt='product'
        />
        <div className={`card-body text-center ${style.body}`}>
          <h5 className='card-title'>{name}</h5>
          <span className='card-text'>IDR {numFormatter(price)}</span>
        </div>
        {profile.role === 'admin' && (
          <button
            className={`btn position-absolute top-50 start-100 translate-middle ${style.btn_delete}`}
            onClick={handleOpen}>
            <i className='fas fa-trash-alt' style={{ color: '#ffffff' }}></i>
          </button>
        )}
        {profile.role === 'admin' && (
          <button
            className={`btn position-absolute top-100 start-100 translate-middle ${style.btn_edit}`}
            onClick={clickEvent}>
            <img src={icon_edit} alt='edit' />
          </button>
        )}
      </div>
      <ModalDelete
        show={open}
        onHide={handleOpen}
        deleteItem={() => handleDelete(id)}
      />
    </>
  )
}
