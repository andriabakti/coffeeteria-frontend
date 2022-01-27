import React, { useState } from 'react'
// components
import SideLeft from './components/SideLeft/SideLeft'
import SideRight from './components/SideRight/SideRight'
import ExitModal from './components/ExitModal/ExitModal'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './profile.module.css'

const Profile = () => {
  const { profile } = useSelector((state) => state.auth)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  return (
    <>
      <div className={`${style.bg}`}>
        <div className={`container ${style.container}`}>
          <div className={`row ${style.title}`}>
            {profile.role === 'admin' ? (
              <h2 className={`text-white`}>Admin Profile</h2>
            ) : (
              <h2 className={`text-white`}>User Profile</h2>
            )}
          </div>
          <div className={`row card ${style.main}`}>
            <SideLeft onShow={handleShow} />
            <SideRight />
          </div>
        </div>
        <ExitModal show={show} onHide={handleShow} />
      </div>
    </>
  )
}

export default Profile
