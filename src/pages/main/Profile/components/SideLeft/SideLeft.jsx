import React from 'react'
// react-router
import { useHistory } from 'react-router-dom'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './SideLeft.module.css'
// asset
import img from '../../../../../assets/default.jpg'

const SideLeft = () => {
  const history = useHistory()
  const { profile } = useSelector((state) => state.auth)

  const logOut = () => {
    localStorage.removeItem('token')
    alert('Anda berhasil log out')
    history.push('/main')
  }

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
          className={`btn ${style.btn_sm} ${style.btn_yellow}`}
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
          className={`btn ${style.btn_md} ${style.btn_yellow}`}
          type='button'>
          Cancel
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_white}`}
          onClick={logOut}
          type='button'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default SideLeft
