import React, { useState } from 'react'
// components
import SideLeft from './components/SideLeft/SideLeft'
import SideRight from './components/SideRight/SideRight'
import ExitModal from './components/ExitModal/ExitModal'
import Footer from '../../../components/module/Footer/Footer'
// react-helmet
import { Helmet } from 'react-helmet'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './Profile.module.css'

const Profile = () => {
  const { profile } = useSelector((state) => state.auth)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

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
      <ExitModal show={show} onHide={handleShow} />
    </div>
  )
}

export default Profile
