import React from 'react'
import Button from '../../../../../components/base/Button/Button'
import style from './SideRight.module.css'

const SideRight = () => {
  return (
    <div className={`col-md-5 ${style.right_side}`}>
      <div>
        <h4 className='text-white'>Address details</h4>
        <div className={`card ${style.card}`}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Delivery</b> to Iskandar Street
            </li>
            <li className="list-group-item">
              Km 5 refinery road oppsite republic road, effurun, Jakarta
            </li>
            <li className="list-group-item">
              +62 81348287878
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className='text-white'>Payment method</h4>
        <div className={`card ${style.card}`}>
          <div className="list-group list-group-flush">
            <div className="list-group-item form-check">
              <input className="form-check-input" type="radio" />
              <label className='form-check-label'>
                Card
              </label>
            </div>
            <div className="list-group-item form-check">
              <input className="form-check-input" type="radio" />
              <label className='form-check-label'>
                Bank account
              </label>
            </div>
            <div className="list-group-item form-check">
              <input className="form-check-input" type="radio" />
              <label className='form-check-label'>
                Cash on delivery
              </label>
            </div>
          </div>
        </div>
      </div>
      <Button color='brown' text='Confirm and Pay' type='button' />
    </div>
  )
}

export default SideRight
