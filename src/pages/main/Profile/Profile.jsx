import React from 'react'
// components
import SideLeft from './components/SideLeft/SideLeft'
import SideRight from './components/SideRight/SideRight'
// react-redux
import { useSelector } from 'react-redux'
// style
import style from './Profile.module.css'

const Profile = () => {
  const { profile } = useSelector((state) => state.auth)

  return (
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
          <SideLeft />
          <SideRight />
        </div>
      </div>
    </div>
  )
}

export default Profile
