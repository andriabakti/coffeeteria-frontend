import React from 'react'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './side_left.module.css'
// asset
import img from '../../../../../assets/default.jpg'

const SideLeft = (props) => {
  const { profile } = useSelector((state) => state.auth)

  return (
    <div className={`col-md-3 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`${style.img_box}`}>
          <img src={img} alt='profile' width='185px' height='185px' />
          <span>
            <b>{profile.username}</b>
          </span>
          <span>{profile.email}</span>
        </div>
        <button
          className={`btn ${style.btn_sm} ${style.btn_gold}`}
          type='button'>
          Choose photo
        </button>
        <button
          className={`btn ${style.btn_sm} ${style.btn_brown}`}
          type='button'>
          Remove photo
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_white}`}
          type='button'>
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
          className={`btn ${style.btn_md} ${style.btn_brown} ${style.btn_shade}`}
          type='button'>
          Save Change
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_gold}`}
          type='button'>
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
