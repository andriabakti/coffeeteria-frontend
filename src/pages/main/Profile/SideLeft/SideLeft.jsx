import React, { useRef } from 'react'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// style
import style from './SideLeft.module.css'
// asset
import blank from '../../../../assets/images/blank_profile.jpg'
import { resetChange } from '../../../../redux/actions/user'


export const SideLeft = (props) => {
  const ref = useRef()
  const dispatch = useDispatch()
  const { detail, detailTemp } = useSelector((state) => state.user)

  const cancelChange = () => {
    dispatch(resetChange())
  }

  return (
    <div className={`col-md-3 ${style.container}`}>
      <div className={`${style.section}`}>
        <div className={`${style.img_box}`}>
          <div className={`${style.img}`}>
            <img src={detailTemp.image ? detailTemp.image : blank} alt='profile' />
          </div>
          <span>
            <b>{detail.username}</b>
          </span>
          <span>{detail.email}</span>
        </div>
        <div>
          <input hidden ref={ref} onChange={props.changeImage} type="file" name="image" id="image" />
          <button
            className={`btn ${style.btn_sm} ${style.btn_gold}`}
            type='button' onClick={() => ref.current.click()}>
            Choose photo
          </button>
        </div>
        <button
          className={`btn ${style.btn_sm} ${style.btn_brown}`}
          type='button' onClick={props.resetImage}>
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
          type='button' onClick={props.handleUpdate}>
          Save Change
        </button>
        <button
          className={`btn ${style.btn_md} ${style.btn_gold}`}
          type='button' onClick={cancelChange}>
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
