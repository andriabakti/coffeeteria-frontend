import React from 'react'
// style
import style from './SideEdit.module.css'
// numeral
// import numeral from 'numeral'
import { useSelector, useDispatch } from 'react-redux'
import { changeDetail } from '../../../../redux/actions/product'
import { numFormatter } from '../../../../utils/numeral'

export const SideEdit = (props) => {
  // numeral.locale('es')
  const { detailTemp } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(changeDetail({
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={`col-md-5 ${style.section}`}>
      <div className={style.detail}>
        {/* <h6 className={`${style.title}`}></h6> */}
        <div className="mb-3">
          <label forhtml="name" className="form-label">Name</label>
          <input type="text" className="form-control form-control-lg" name='name' id="name" placeholder="name"
            onChange={handleChange}
            value={detailTemp.name} />
        </div>
        <div className="mb-3">
          <label forhtml="price" className="form-label">Price</label>
          <input type="text" className="form-control form-control-lg" name='price' id="price" placeholder="price"
            onChange={handleChange}
            value={`IDR ${numFormatter(detailTemp.price)}`} />
        </div>
        <div className="mb-3">
          <label forhtml="description" className="form-label">Description</label>
          <textarea className="form-control" name='description' id="description" rows="3"
            onChange={handleChange}
            value={detailTemp.description}>
          </textarea>
        </div>
      </div>
      {/* <div className={style.option}> */}
      <label forhtml="category" className="form-label">Category</label>
      <select
        id='category'
        className={`mb-4 form-select ${style.dropdown}`}
        aria-label='Default select'
        // defaultValue='Select Category'
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
      <button className={`btn ${style.btn_brown}`} type='button'
        onClick={props.handleUpdate}
      >
        Save change
      </button>
      {/* </div> */}
    </div>
  )
}