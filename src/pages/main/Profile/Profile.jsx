import React from 'react'

import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={`${style.bg}`}>
      <div className={`container ${style.container}`}>
        <div className={`row`}>
          <h1 className={`text-white`}>Profile Page</h1>
        </div>
        <div className={`row card ${style.content}`}>
          <div className={`col-md-4 ${style.side_left}`}>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className={`col-md-7 ${style.side_right}`}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
