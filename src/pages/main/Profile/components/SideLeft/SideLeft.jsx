import React from 'react'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './side_left.module.css'
// asset
import blank from '../../../../../assets/blank_profile.jpg'

const SideLeft = (props) => {
  const { profile } = useSelector((state) => state.auth)

  return (
    <div className={`col-md-3 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`${style.img_box}`}>
          <div className={`${style.img}`}>
            <img src={blank} alt='profile' />
          </div>
          <span>
            <b>{profile.username}</b>
          </span>
          <span>{profile.email}</span>
        </div>
        <button
          className={`btn ${style.btn_sm} ${style.btn_gold}`}
          type='button' disabled>
          Choose photo
        </button>
        <button
          className={`btn ${style.btn_sm} ${style.btn_brown}`}
          type='button' disabled>
          Remove photo
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_white}`}
          type='button' disabled>
          Edit Password
        </button>
      </div>
      <div className={`${style.section}`}>
        <span>
          Do you want to save
          <br />
          the change?
        </span>
        <button
          className={`btn ${style.btn_md} ${style.btn_brown}`}
          type='button' disabled>
          Save Change
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_gold}`}
          type='button' disabled>
          Cancel
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_white}`}
          onClick={props.onShow}
          type='button'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default SideLeft
