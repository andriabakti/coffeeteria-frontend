import React from 'react'
import { Modal } from 'react-bootstrap'
import style from './ModalCreate.module.css'
import blank from '../../assets/images/blank_img.jpg'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, getProduct } from '../../redux/actions/product'

export const ModalCreate = (props) => {
  const ref = useRef()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('')

  const formData = new FormData()
  formData.append('name', name)
  formData.append('price', price)
  formData.append('image', image)
  formData.append('description', desc)
  formData.append('category_id', category)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePrice = (e) => {
    const number = parseInt(e.target.value)
    setPrice(number)
  }
  const handleImage = (e) => {
    setImage(e.target.files[0])
    handlePreview(e.target.files[0])
  }
  const handlePreview = (file) => {
    const image = URL.createObjectURL(file)
    setPreview(image)
  }
  const reset = () => {
    setImage(ref.current.value = null)
    setPreview(ref.current.value = null)
  }
  const handleDesc = (e) => {
    setDesc(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleCreate = async () => {
    await dispatch(
      addProduct(formData)
    )
    alert('New product added successfully')
    handleClose()
    await dispatch(getProduct(1, '', ''))
  }
  const handleClose = () => {
    setPreview(ref.current.value = null)
    props.onHide()
  }
  return (
    <Modal
      show={props.show}
      dialogClassName={style['border-radius']}
      className={`${style.modal}`}
      centered
      size='lg'>
      <div className={`${style.modal_box}`}>
        <Modal.Body className={`container-fluid ${style.modal_body}`}>
          Add new product
          <div className={`row ${style.row}`}>
            <div className={`col-md-6 ${style.form}`}>
              <div>
                <div className='mb-3'>
                  <label forHtml='name' className='form-label'>
                    Product name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Product name'
                    onChange={(e) => handleName(e)}
                  />
                </div>
                <div className='mb-3'>
                  <label forHtml='price' className='form-label'>
                    Product price
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='price'
                    placeholder='Product price'
                    onChange={(e) => handlePrice(e)}
                  />
                </div>
              </div>
              <div className='mb-3'>
                <label forHtml='description' className='form-label'>
                  Product description
                </label>
                <textarea
                  className='form-control'
                  id='description'
                  rows='3'
                  onChange={(e) => handleDesc(e)}></textarea>
              </div>
              <div className='mb-3'>
                <label className='form-label' forHtml='category'>
                  Product category
                </label>
                <select
                  className='form-select'
                  id='category'
                  defaultValue={'Choose...'}
                  onChange={(e) => handleCategory(e)}>
                  <option disabled hidden>
                    Choose...
                  </option>
                  <option value={1}>Coffee</option>
                  <option value={2}>Non Coffee</option>
                  <option value={3}>Food</option>
                  <option value={4}>Add-on</option>
                </select>
              </div>
            </div>
            <div className={`col-md-6 ${style.preview}`}>
              <div>
                <label forHtml='image' className='form-label'>
                  Product Image
                </label>
                <div className='mb-3 input-group'>
                  <input
                    className='form-control'
                    type='file'
                    id='image'
                    accept='image/*'
                    onChange={(e) => handleImage(e)}
                    ref={ref}
                  />
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    id='button-clear'
                    value=''
                    onClick={reset}>
                    Clear
                  </button>
                </div>
              </div>
              <div>
                <img src={preview ? preview : blank} alt='preview' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className={`${style.modal_footer}`}>
          <button
            className={`btn ${style.btn_white}`}
            type='button'
            onClick={handleClose}>
            Cancel
          </button>
          <button className={`btn ${style.btn_brown}`} type='button'
            onClick={handleCreate}>
            Add
          </button>
        </div>
      </div>
    </Modal>
  )
}