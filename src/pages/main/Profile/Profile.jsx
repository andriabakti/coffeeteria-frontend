import React, { useState } from 'react'
import { useEffect } from 'react'
// components
import SideLeft from './components/SideLeft/SideLeft'
import SideRight from './components/SideRight/SideRight'
import ModalExit from '../../../components/module/ModalExit/ModalExit'
import Footer from '../../../components/module/Footer/Footer'
// react-helmet
import { Helmet } from 'react-helmet'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetail, changeProfile, updateProfile } from '../../../redux/actions/user'
// style
import style from './Profile.module.css'
import { useHistory } from 'react-router-dom'
import moment from 'moment'


const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.auth)
  const { detail, detailTemp, msg } = useSelector((state) => state.user)
  const [date, setDate] = useState()
  const [image, setImage] = useState()
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  const handleDate = (date) => {
    let formatted
    let birthDate
    if (date !== null) {
      formatted = moment(date).format('YYYY-MM-DD') + 'T00:00:00.000Z';
      birthDate = moment(date).format('YYYY-MM-DD')
      setDate(birthDate)
    } else {
      formatted = moment().toISOString()
      birthDate = moment(formatted).format('YYYY-MM-DD')
      setDate(birthDate)
    }
    dispatch(
      changeProfile({
        birth_date: formatted
      })
    )
  }

  const handleImage = (e) => {
    const imageFile = e.target.files[0]
    setImage(imageFile)
    dispatch(changeProfile({
      image: URL.createObjectURL(imageFile)
    }))
  }

  const removeImage = () => {
    setImage(null)
    dispatch(changeProfile({
      image: null
    }))
  }

  const newProfile = new FormData()
  newProfile.append('first_name', detailTemp.first_name)
  newProfile.append('last_name', detailTemp.last_name)
  newProfile.append('birth_date', date)
  newProfile.append('gender', detailTemp.gender)
  newProfile.append('address', detailTemp.address)
  newProfile.append('image', image)
  newProfile.append('username', detailTemp.username)
  newProfile.append('email', detailTemp.email)
  newProfile.append('phone', detailTemp.phone)

  const editProfile = async () => {
    await dispatch(updateProfile(newProfile, detail.id))
    alert(msg)
    await dispatch(getUserDetail(detail.id))
    history.push('/main/profile')
  }

  useEffect(() => {
    dispatch(getUserDetail(profile.id))
  }, [dispatch, profile])

  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Your Profile - CoffeeTeria</title>
        <meta name='description' content='This is Profile Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <div className={`container ${style.content}`}>
          <div className={`row ${style.title}`}>
            <h2 className={`text-white`}>
              {profile.role === 'admin' ? 'Admin' : 'User'} Profile
            </h2>
          </div>
          <div className={`row card ${style.section}`}>
            <SideLeft
              onShow={handleShow}
              changeImage={handleImage}
              resetImage={removeImage}
              handleUpdate={editProfile}
            />
            <SideRight
              changeDate={handleDate}
            />
          </div>
        </div>
        <Footer />
      </div>
      <ModalExit show={show}
        onHide={handleShow}
      />
    </div>
  )
}

export default Profile
