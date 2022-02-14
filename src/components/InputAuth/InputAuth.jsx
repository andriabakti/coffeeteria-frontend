import React from 'react'
// style
import style from './InputAuth.module.css'

const InputAuth = (props) => {
  return (
    <div className={`mb-3 ${style.box}`}>
      <label
        className='form-label'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className={`form-control`}
        placeholder={props.placeholder}
        onChange={props.changeEvent}
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
      />
    </div>
  )
}

export default InputAuth