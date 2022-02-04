import React from 'react';
// react-router
import { Link } from 'react-router-dom'
// style
import style from './section_one.module.css'
// assets
import icon_user from '../../../../../assets/icon_user.svg'
import icon_location from '../../../../../assets/icon_location.svg'
import icon_like from '../../../../../assets/icon_like.svg'

const SectionOne = () => {
  return (
    <div className={`text-white ${style.container}`}>
      <div className={`container ${style.main}`}>
        <div className={`${style.content}`}>
          <h1>Start Your Day with<br />
            Coffee and Good Meals
          </h1>
          <p>We provide high quality beans, good taste, and healthy<br />
            meals made by love just for you. Start your day with us<br />
            for a bigger smile!
          </p>
          <Link to='/auth/sign-up'>
            <button className={`btn ${style.btn_gold}`} type='button'>
              Get Started
            </button>
          </Link>
        </div>
        <div className={`text-black ${style.card}`}>
          <div className={`row ${style.card_row}`}>
            <div className={`col-md-3 ${style.card_part}`}>
              <div className={`${style.icon}`}>
                <img src={icon_user} alt="icon_user" />
              </div>
              <div className={`${style.text}`}>
                <h6>90+</h6>
                <span>
                  Staff
                </span>
              </div>
            </div>
            <div className={`col-md-5 ${style.card_part} ${style.line}`}>
              <div className={`${style.icon}`}>
                <img src={icon_location} alt="icon_location" />
              </div>
              <div className={`${style.text}`}>
                <h6>30+</h6>
                <span>
                  Stores
                </span>
              </div>
            </div>
            <div className={`col-md-3 ${style.card_part}`}>
              <div className={`${style.icon}`}>
                <img src={icon_like} alt="icon_like" />
              </div>
              <div className={`${style.text}`}>
                <h6>800+</h6>
                <span>
                  Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default SectionOne;
