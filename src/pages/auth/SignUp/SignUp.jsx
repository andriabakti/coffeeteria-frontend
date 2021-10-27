import React from 'react'

import Form from '../../../components/base/Form/Form'
import Button from '../../../components/base/Button/Button'
import style from './sign_up.module.css'

const SignUp = () => {
  return (
    <div className={`container ${style.form}`}>
      <h4>Sign Up</h4>
      <form>
        <Form
          name='email'
          type='email'
          label='Email Address :'
          placeholder='Enter your email adress' />
        <Form
          name='password'
          type='password'
          label='Password :'
          placeholder='Enter your password' />
        <Form
          name='phone'
          type='tel'
          label='Phone Number :'
          placeholder='Enter your phone number' />
        <Button text='Sign Up' type='submit' />
      </form>
    </div>
  )
}

export default SignUp
