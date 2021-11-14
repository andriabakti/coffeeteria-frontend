import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-3 form-group'>
      <label
        className='form-label'
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className='form-control'
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.changeEvent}
      />
    </div>
  )
}

export default Input
