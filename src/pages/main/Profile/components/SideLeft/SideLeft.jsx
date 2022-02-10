import React, { useState, useRef } from 'react'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// style
import style from './side_left.module.css'
// asset
import blank from '../../../../../assets/blank_profile.jpg'
import { getUserDetail, changeProfile, updateProfile } from '../../../../../redux/actions/user'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const SideLeft = (props) => {
  const history = useHistory()
  const ref = useRef()
  const [image, setImage] = useState()
  const { detail, detailTemp } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleImage = (e) => {
    const imageFile = e.target.files[0]
    setImage(imageFile)
    dispatch(changeProfile({
      image: URL.createObjectURL(imageFile)
    }))
  }

  const removeImage = () => {
    dispatch(changeProfile({
      image: null
    }))
  }

  const newProfile = new FormData()
  newProfile.append('first_name', detailTemp.first_name)
  newProfile.append('last_name', detailTemp.last_name)
  newProfile.append('birth_date', moment(detailTemp.birth_date).format('YYYY-MM-DD'))
  newProfile.append('gender', detailTemp.gender)
  newProfile.append('address', detailTemp.address)
  newProfile.append('image', image)
  newProfile.append('username', detailTemp.username)
  newProfile.append('email', detailTemp.email)
  newProfile.append('phone', detailTemp.phone)

  const editProfile = async () => {
    await dispatch(updateProfile(newProfile, detail.id))
    alert('Profile berhasil diupdate')
    await dispatch(getUserDetail(detail.id))
    history.push('/main/profile')
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
          <input hidden ref={ref} onChange={handleImage} type="file" name="image" id="image" />
          <button
            className={`btn ${style.btn_sm} ${style.btn_gold}`}
            type='button' onClick={() => ref.current.click()}>
            Choose photo
          </button>
        </div>
        <button
          className={`btn ${style.btn_sm} ${style.btn_brown}`}
          type='button' onClick={removeImage}>
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
          type='button' onClick={editProfile}>
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
