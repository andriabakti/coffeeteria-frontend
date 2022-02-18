import React from 'react'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changeDetail, resetChange } from '../../../../redux/actions/product'
// modules: numeral-formatter
import { numFormatter } from '../../../../utils/numeral'
// styles: module
import style from './SideEdit.module.css'

export const SideEdit = (props) => {
  const { detail, detailTemp } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(
      changeDetail({
        [e.target.name]: e.target.value
      })
    )
  }
  const handleReset = () => {
    dispatch(resetChange())
  }

  return (
    <div className={`col-md-5 ${style.section}`}>
      <div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control form-control-lg'
            name='name'
            id='name'
            placeholder='name'
            onChange={handleChange}
            value={detailTemp.name}
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='text'
            className='form-control form-control-lg'
            name='price'
            id='price'
            placeholder='price'
            onChange={handleChange}
            value={`IDR ${numFormatter(detailTemp.price)}`}
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            name='description'
            id='description'
            rows='3'
            onChange={handleChange}
            value={detailTemp.description}></textarea>
        </div >
        <div className={`mb-3  ${style.field_edit}`}>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className={`mb-4 form-select ${style.dropdown}`}
            aria-label='Default select'
            onChange={handleChange}
            name='category_id'
            value={detailTemp.category_id}
            required>
            <option disabled hidden>
              Select category
            </option>
            <option value={1}>Coffee</option>
            <option value={2}>Non Coffee</option>
            <option value={3}>Food</option>
            <option value={4}>Add-on</option>
          </select>
        </div >
      </div >
      <button
        disabled={
          detailTemp.name !== detail.name ||
            detailTemp.price !== detail.price ||
            detailTemp.description !== detail.description ||
            detailTemp.category_id !== detail.category_id ||
            detailTemp.image !== detail.image
            ? false
            : true
        }
        className={`btn mb-4 ${style.btn} ${style.btn_yellow}`}
        onClick={handleReset}
        type='button'>
        Cancel
      </button>
      <button
        disabled={
          detailTemp.name !== detail.name ||
            detailTemp.price !== detail.price ||
            detailTemp.description !== detail.description ||
            detailTemp.category_id !== detail.category_id ||
            detailTemp.image !== detail.image
            ? false
            : true
        }
        className={`btn ${style.btn} ${style.btn_brown}`}
        onClick={props.handleUpdate}
        type='button'>
        Save change
      </button>
    </div >
  )
}
