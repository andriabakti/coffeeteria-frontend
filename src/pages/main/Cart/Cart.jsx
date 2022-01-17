import React, { Component } from 'react';
// components
import SideLeft from './components/SideLeft/SideLeft';
import SideRight from './components/SideRight/SideRight';
// style
import style from './Cart.module.css'

class Cart extends Component {
  render() {
    return (
      <div className={`${style.bg}`}>
        <div className={`container ${style.container}`}>
          <div className={`row ${style.title}`}>
            <h2 className={`text-white`}>
              Checkout your<br />
              item now!
            </h2>
          </div>
          <div className={`row ${style.main}`}>
            <SideLeft />
            <SideRight />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;