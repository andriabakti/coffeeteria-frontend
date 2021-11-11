import React from 'react'

import Input from '../../../components/base/Input/Input'
import Button from '../../../components/base/Button/Button'
import style from './sign_up.module.css'

const SignUp = () => {
  return (
    <div className={`container ${style.form}`}>
      <h4>Sign Up</h4>
      <form>
        <Input
          name='email'
          type='email'
          label='Email Address :'
          placeholder='Enter your email adress' />
        <Input
          name='password'
          type='password'
          label='Password :'
          placeholder='Enter your password' />
        <Input
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
