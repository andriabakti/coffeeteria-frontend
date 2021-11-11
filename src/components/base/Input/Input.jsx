import React from 'react'

const Form = (props) => {
  return (
    <div className='mb-3'>
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
      />
    </div>
  )
}

export default Form
