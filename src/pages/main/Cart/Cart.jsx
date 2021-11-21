import React, { Component } from 'react';

import SideLeft from './components/SideLeft/SideLeft';
import SideRight from './components/SideRight/SideRight';

import style from './Cart.module.css'
class Cart extends Component {
  render() {
    return (
      <div className={`${style.bg}`}>
        <div className={`container ${style.container}`}>
          <div className={`row text-white ${style.title}`}>
            <h2>Checkout your<br />
              item now!
            </h2>
          </div>
          <div className={`row ${style.content}`}>
            <SideLeft />
            <SideRight />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;