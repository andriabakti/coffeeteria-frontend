import React from 'react';
// style
import style from './SectionTwo.module.css'
// assets
import home_img_one from '../../../../assets/images/home_img.png'

const SectionTwo = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={`${style.content}`}>
        <div className={`row ${style.main}`}>
          <div className={`col-lg-6 px-0 ${style.side_left}`}>
            <img src={home_img_one} alt="illustration_one" />
          </div>
          <div className={`col-lg-5 ${style.side_right}`}>
            <h3>We Provide Good Coffee<br />
              and Healthy Meals
            </h3>
            <span>You can explore the menu that we provide with fun and<br />
              have their own taste and make your day better.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SectionTwo;
