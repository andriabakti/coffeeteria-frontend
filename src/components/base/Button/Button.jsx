import React from 'react'
import style from './button.module.css'
import './button.css'

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.color} ${props.corner} ${style.button}`}
      onClick={props.clickEvent}>
      {props.text}
    </button>
  )
}

export default Button
