import React from 'react'
// style
import style from './SideRight.module.css'
// asset
import icon_edit from '../../../../../assets/icon_edit.svg'

const SideRight = () => {
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
              type='textarea'
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
              id='lastname'
              type='text'
            />
          </div>
        </div>
        <div className={`col-md-4 ${style}`}>
          <div className={`${style.input_box}`}>
            <label className={`form-label ${style.input_label}`} htmlFor='date'>
              MM/DD/YYYY :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              id='date'
              type='date'
            />
          </div>
        </div>
      </div>
      <div className={`${style.section}`}>
        <div className='form-check'>
          <input
            className={`form-check-input ${style.check}`}
            value='option1'
            defaultChecked
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
            value='option2'
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
