import React from 'react'

export const Toast = (props) => {
  return (
    <div show={props.show} aria-live='polite' aria-atomic='true' className='position-relative'>
      <div className='toast-container position-absolute top-0 end-0 p-3'>
        <div
          className='toast align-items-center top-0 end-0'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'>
          <div className='d-flex'>
            <div className='toast-body'>{props.msg}</div>
            <button
              type='button'
              className='btn-close me-2 m-auto'
              data-bs-dismiss='toast'
              aria-label='Close'></button>
          </div>
        </div>
      </div>
    </div>
  )
}
