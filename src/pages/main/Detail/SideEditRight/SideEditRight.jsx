import React from 'react'
// style
import style from './side_edit_right.module.css'
// numeral
import numeral from 'numeral'
import { useSelector, useDispatch } from 'react-redux'
import { changeDetail } from '../../../../redux/actions/product'

const SideEditRight = (props) => {
  numeral.locale('es')
  const { detail } = useSelector((state) => state.items)
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
            value={detail.name} />
        </div>
        <div className="mb-3">
          <label forhtml="price" className="form-label">Price</label>
          <input type="text" className="form-control form-control-lg" name='price' id="price" placeholder="price"
            onChange={handleChange}
            value={`IDR ${numeral(detail.price).format('0,0')}`} />
        </div>
        <div className="mb-3">
          <label forhtml="description" className="form-label">Description</label>
          <textarea className="form-control" name='description' id="description" rows="3"
            onChange={handleChange}
            value={detail.description}>
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
        value={detail.category_id}
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

export default SideEditRight
