import React, { useState } from 'react'
// components
import Input from '../../../components/base/Input/Input'
// react-router
import { useHistory } from 'react-router-dom'
// react-redux
import { useDispatch } from 'react-redux'
// redux
import { register } from '../../../redux/actions/auth'
// style
import style from './SignUp.module.css'

const SignUp = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    role: 2
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(register(form))
      .then((result) => {
        alert(result.value.data.message)
        history.push('/auth/sign-in')
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className={`container ${style.container}`}>
      <form className={`${style.form}`} onSubmit={handleLogin}>
        <span>Sign Up</span>
        <div>
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your email adress'
            label='Email Address :'
            name='email'
            type='email'
            id='email'
          />
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your password'
            label='Password :'
            name='password'
            type='password'
            id='password'
          />
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your phone number'
            label='Phone Number :'
            name='phone'
            type='tel'
            id='phone'
          />
          <button className={`btn ${style.btn_yellow}`} type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
