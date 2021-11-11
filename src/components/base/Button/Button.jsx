import React from 'react'

import style from './button.module.css'

const Button = (props) => {
  return (
    <button type={props.type} className={`btn ${style.button}`} onClick={props.clickEvent}>
      {props.text}
    </button>
  )
}

export default Button
