import React from 'react'

import style from './SideLeft.module.css'

const SideLeft = () => {
  return (
    <div className={`col-md-5 ${style.left_side}`}>
      <div className={`card text-center ${style.card}`}>
        <h3><b>Order Summary</b></h3>
        <div>

        </div>
      </div>
    </div>
  )
}

export default SideLeft
