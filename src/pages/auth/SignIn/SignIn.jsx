import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../../../components/base/Input/Input'
import Button from '../../../components/base/Button/Button'
import style from './sign_in.module.css'
// import { connect } from 'react-redux'
// import { toggleAuth } from '../../../redux/actions/auth'

const SignIn = () => {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log('Tes');
    dispatch({
      type: 'CHANGE_EMAIL',
      payload: 'Tes@gmail.com'
    })
  }
  console.log(authState);
  return (
    <div className={`container ${style.form}`}>
      <h4>Login</h4>
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
        <Button text='Login' type='submit' clickEvent={handleLogin} />
      </form>
    </div>
  )
}

// const mapDispatchToProps = { toggleAuth }

export default SignIn
