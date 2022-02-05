import React from 'react';
import ScrollToTop from 'react-scroll-to-top'
// import { ScrollToTop } from 'react-simple-scroll-up'
import style from './ButtonUp.module.css'
import { ReactComponent as Icon } from '../../../assets/icon_arrow.svg'

const ButtonUp = () => {
  return (
    <>
      <ScrollToTop
        className={`btn ${style.btn}`}
        component={<Icon />}
        smooth
      />
    </>
  )
};

export default ButtonUp;
