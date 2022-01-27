import React from 'react'
// styles
import style from './button.module.css'
import './button.css'

const Button = (props) => {
  return (
    <button
      className={`btn ${props.color} ${props.corner} ${style.button}`}
      onClick={props.clickEvent}
      type={props.type}
    >
      {props.text}
    </button>
  )
}

export default Button
