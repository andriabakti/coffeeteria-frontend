import React from 'react'
// assets: image
import illust_home from '../../../../assets/images/illust_home.png'
// styles: module
import style from './SectionLower.module.css'

export const SectionLower = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={`${style.content}`}>
        <div className={`row ${style.main}`}>
          <div className={`col-lg-6 px-0 ${style.side_left}`}>
            <img src={illust_home} alt='illustration_one' />
          </div>
          <div className={`col-lg-5 ${style.side_right}`}>
            <h3>
              We Provide Good Coffee
              <br />
              and Healthy Meals
            </h3>
            <span>
              You can explore the menu that we provide with fun and
              <br />
              have their own taste and make your day better.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
