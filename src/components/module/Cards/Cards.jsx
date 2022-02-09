import React, { useState } from 'react'
// style
import style from './Cards.module.css'
// assets
import none from '../../../assets/default.jpg'
import icon_edit from '../../../assets/icon_edit.svg'
// numeral
import numeral from 'numeral'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, getData } from '../../../redux/actions/product'
import ModalDelete from '../ModalDelete/ModalDelete'

const Cards = ({ id, name, price, image, clickEvent }) => {
  numeral.locale('es')
  const formatted = numeral(price).format('0,0')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const { profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleDelete = async (itemId) => {
    await dispatch(deleteProduct(itemId))
    alert('Product deleted successfully!')
    handleOpen()
    await dispatch(getData(1, ''))
  }
  return (
    <>
      <div
        className={`card border-0 position-relative ${profile.role === 'admin' ? style.content : style.container
          }`}
        onClick={profile.role !== 'admin' ? clickEvent : undefined}>
        <img
          className={`${style.image}`}
          src={image ? image : none}
          alt='product'
        />
        <div className={`card-body text-center ${style.body}`}>
          <h5 className='card-title'>{name}</h5>
          <span className='card-text'>IDR {formatted}</span>
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

export default Cards
