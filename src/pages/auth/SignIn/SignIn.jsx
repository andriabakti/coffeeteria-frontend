import React from 'react'

import Form from '../../../components/base/Form/Form'
import Button from '../../../components/base/Button/Button'
import style from './sign_in.module.css'

const SignIn = () => {
  return (
    <div className={`container ${style.form}`}>
      <h4>Login</h4>
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
        <Button text='Login' type='submit' />
      </form>
    </div>
  )
}

export default SignIn
