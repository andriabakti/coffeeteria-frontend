import React from 'react';
// react-helmet
import { Helmet } from 'react-helmet'
// components
import SideLeft from './SideLeft/SideLeft';
import SideRight from './SideRight/SideRight';
import Footer from '../../../components/Footer/Footer';
// style
import style from './Cart.module.css'

const Cart = () => {
  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>Your Cart - CoffeeTeria</title>
        <meta name='description' content='This is Cart Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <div className={`container ${style.content}`}>
          <div className={`row ${style.title}`}>
            <h2 className={`text-white`}>
              Checkout your<br />
              item now!
            </h2>
          </div>
          <div className={`row ${style.section}`}>
            <SideLeft />
            <SideRight />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;