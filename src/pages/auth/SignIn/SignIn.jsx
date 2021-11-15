import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Input from '../../../components/base/Input/Input'
import Button from '../../../components/base/Button/Button'
import style from './sign_in.module.css'
import { login } from '../../../redux/actions/auth'

const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  // const loginState = useSelector((state) => state.auth)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(form))
      .then((result) => {
        console.log(result);
        localStorage.setItem('token', result.value.data.data.token)
        // localStorage.setItem('token', loginState.data.token)
        history.push('/main/product')
      })
      .catch((error) => {
        console.log(error)
      })
    // console.log(loginState);
  }
  return (
    <div className={`container ${style.form}`}>
      <h4>Login</h4>
      <form onSubmit={handleLogin}>
        <Input
          id='email'
          name='email'
          type='email'
          label='Email Address :'
          placeholder='Enter your email adress'
          changeEvent={(e) => handleChange(e)}
        />
        <Input
          id='password'
          name='password'
          type='password'
          label='Password :'
          placeholder='Enter your password'
          changeEvent={(e) => handleChange(e)}
        />
        <Button text='Login' type='submit' color='yellow' />
      </form>
    </div>
  )
}

export default SignIn
