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
import { getUserDetail } from '../../../redux/actions/user'
// style
import style from './Profile.module.css'

const Profile = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.auth)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

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
            <SideLeft onShow={handleShow} />
            <SideRight />
          </div>
        </div>
        <Footer />
      </div>
      <ModalExit show={show} onHide={handleShow} />
    </div>
  )
}

export default Profile
