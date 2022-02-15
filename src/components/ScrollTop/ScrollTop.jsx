import React from 'react';
import ScrollToTop from 'react-scroll-to-top'
// import { ScrollToTop } from 'react-simple-scroll-up'
import style from './ScrollTop.module.css'
import { ReactComponent as Icon } from '../../assets/icons/icon_arrow.svg'

export const ScrollTop = () => {
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
