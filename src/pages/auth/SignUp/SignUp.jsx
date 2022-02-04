import React, { useState } from 'react'
// components
import Input from '../../../components/base/Input/Input'
// react-helmet
import { Helmet } from 'react-helmet'
// react-router
import { useHistory } from 'react-router-dom'
// react-redux
import { useDispatch } from 'react-redux'
// redux
import { register } from '../../../redux/actions/auth'
// style
import style from './sign_up.module.css'

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
        console.log(error)
      })
  }
  return (
    <div className={`container ${style.container}`}>
      <Helmet>
        <title>Sign Up - CoffeeTeria</title>
        <meta name='description' content='This is sign up page' />
      </Helmet>
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
            required='required'
          />
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your password'
            label='Password :'
            name='password'
            type='password'
            id='password'
            required='required'
          />
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your phone number'
            label='Phone Number :'
            name='phone'
            type='tel'
            id='phone'
            required='required'
          />
          <button
            className={`btn ${style.btn_gold} ${(form.email === '' ||
              form.password === '' ||
              form.phone === '') &&
              'disabled'
              }`}
            type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
