import React from 'react'
// style
import style from './side_right.module.css'
// asset
import icon_edit from '../../../../../assets/icon_edit.svg'
import { useSelector, useDispatch } from 'react-redux'
import { changeProfile } from '../../../../../redux/actions/user'
import DatePicker from 'react-date-picker'
// import moment from 'moment'

const SideRight = () => {
  const dispatch = useDispatch()
  const { detailTemp } = useSelector((state) => state.user)

  const handleDate = (date) => {
    dispatch(changeProfile({
      birth_date: date
    }))
  }
  const handleChange = (e) => {
    dispatch(changeProfile({
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className={`col-md-8 ${style.container}`}>
      <div className={`${style.title}`}>
        <h3>Contacts</h3>
        <button type='button' className={`btn ${style.btn_edit}`}>
          <img src={icon_edit} alt='edit_btn' />
        </button>
      </div>
      <div className={`${style.section}`}>
        <div className={`col-md-6 ${style.col}`}>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='email'>
              Email address :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={detailTemp.email}
              name='email'
              type='email'
              id='email'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='address'>
              Delivery address :
            </label>
            <textarea
              className={`form-control ${style.input_area} ${style.input_md}`}
              onChange={handleChange}
              value={detailTemp.address}
              type='textarea'
              name='address'
              id='address'
            />
          </div>
        </div>
        <div className={`col-md-4 ${style}`}>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='phone'>
              Mobile number :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={detailTemp.phone}
              name='phone'
              id='phone'
              type='tel'
            />
          </div>
        </div>
      </div>
      <div className={`${style.title}`}>
        <h3>Details</h3>
      </div>
      <div className={`${style.section}`}>
        <div className={`col-md-6 ${style.col}`}>
          <div className={`${style.input_box}`}>
            <label className={`form-label ${style.input_label}`} htmlFor='name'>
              Display name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={detailTemp.username}
              name='username'
              id='name'
              type='text'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='firstname'>
              First name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={detailTemp.first_name}
              name='first_name'
              id='firstname'
              type='text'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='lastname'>
              Last name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={detailTemp.last_name}
              name='last_name'
              id='lastname'
              type='text'
            />
          </div>
        </div>
        <div className={`col-md-4 ${style}`}>
          <label className={`form-label ${style.input_label}`} htmlFor='date'>
            DD/MM/YYYY :
          </label>
          {/* <div className={`${style.input_box}`}> */}
          <DatePicker
            // className={`form-control ${style.input_area} ${style.input_sm}`}
            onChange={handleDate}
            value={detailTemp.birth_date === null ? null : detailTemp.birth_date}
            dateFromat='y-M-dd'
            id='date'
          />
          {/* </div> */}
        </div>
      </div>
      <div className={`${style.section}`}>
        <div className='form-check'>
          <input
            className={`form-check-input ${style.check}`}
            onChange={handleChange}
            value={(detailTemp.gender === '2' || detailTemp.gender === null) && 1}
            name='gender'
            type='radio'
            id='male'
          />
          <label className={`form-check-label ${style.input_label}`} htmlFor='male'>
            Male
          </label>
        </div>
        <div className='form-check'>
          <input
            className={`form-check-input ${style.check}`}
            onChange={handleChange}
            value={(detailTemp.gender === '1' || detailTemp.gender === null) && 2}
            name='gender'
            type='radio'
            id='female'
          />
          <label
            className={`form-check-label ${style.input_label}`}
            htmlFor='female'>
            Female
          </label>
        </div>
      </div>
    </div >
  )
}

export default SideRight
