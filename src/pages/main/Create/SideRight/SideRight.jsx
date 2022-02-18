import React from 'react'
// modules: numeral
// import { numFormatter } from '../../../../utils/numeral'
// styles: module
import style from './SideRight.module.css'

export const SideRight = (props) => {
  return (
    <div className={`col-md-6 ${style.wrapper}`}>
      <div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='name' className='form-label'>
            Name :
          </label>
          <input
            className='form-control form-control-lg'
            placeholder='Type product name max. 50 characters'
            maxLength={50}
            name='name'
            type='text'
            id='name'
            required
            onChange={props.getChange}
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='price' className='form-label'>
            Price :
          </label>
          <input
            type='text'
            className='form-control form-control-lg'
            name='price'
            id='price'
            placeholder='Type the price'
            required
            onChange={props.getChange}
          // value={numFormatter()}
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='description' className='form-label'>
            Description :
          </label>
          <textarea
            className='form-control'
            name='description'
            id='description'
            rows='3'
            placeholder='Describe your product max. 150 characters'
            maxLength={150}
            required
            onChange={props.getChange}
          // value={detailTemp.description}
          >
          </textarea>
        </div>
        <div className={`mb-3  ${style.field_edit}`}>
          <label htmlFor='category' className='form-label'>
            Category :
          </label>
          <select
            id='category'
            className={`mb-4 form-select ${style.dropdown}`}
            aria-label='Default select'
            onChange={props.getChange}
            name='category'
            // value={detailTemp.category_id}
            defaultValue={'Choose product category'}
            required>
            <option disabled hidden>
              Choose product category
            </option>
            <option value={1}>Coffee</option>
            <option value={2}>Non Coffee</option>
            <option value={3}>Food</option>
            <option value={4}>Add-on</option>
          </select>
        </div>
      </div>
      <button
        // disabled={
        //   detailTemp.name !== detail.name ||
        //     detailTemp.price !== detail.price ||
        //     detailTemp.description !== detail.description ||
        //     detailTemp.category_id !== detail.category_id ||
        //     detailTemp.image !== detail.image
        //     ? false
        //     : true
        // }
        className={`btn mb-4 ${style.btn} ${style.btn_brown}`}
        onClick={props.confirmAdd}
        type='button'>
        Save product
      </button>
      <button
        // disabled={
        //   detailTemp.name !== detail.name ||
        //     detailTemp.price !== detail.price ||
        //     detailTemp.description !== detail.description ||
        //     detailTemp.category_id !== detail.category_id ||
        //     detailTemp.image !== detail.image
        //     ? false
        //     : true
        // }
        className={`btn ${style.btn} ${style.btn_grey}`}
        // onClick={handleReset}
        type='button'>
        Cancel
      </button>
    </div>
  )
}
