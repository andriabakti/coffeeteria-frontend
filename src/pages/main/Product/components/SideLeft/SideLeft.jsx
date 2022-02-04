import React from 'react';
// react-bootstrap
import { Col } from 'react-bootstrap'
// style
import style from './side_left.module.css'

const SideLeft = () => {
  return (
    <Col md='3' className={`${style.sidebar}`}>
      <div className='mb-auto'>
        <h4>Promo Today</h4>
        <p>
          Coupons will be updated every weeks.
          <br />
          Check them out!
        </p>
      </div>
      <div className={`${style.coupon}`}>
        <p>
          We are sorry,
          <br />
          the coupons are not available for now.
        </p>
      </div>
      <div className={style.terms}>
        <span>
          <b>Terms and Codition</b>
        </span>
        <li>1. You can only apply 1 coupon per day</li>
        <li>2. It only for dine in</li>
        <li>3. Buy 1 get 1 only for new user</li>
        <li>4. Should make member card to apply coupon</li>
      </div>
    </Col>);
};

export default SideLeft;
