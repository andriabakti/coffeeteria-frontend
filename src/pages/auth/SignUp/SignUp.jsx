import React, { useState } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { registerUser } from '../../../redux/actions/user'
// components: base
import { InputAuth } from '../../../components/base/InputAuth/InputAuth'
// styles: module
import style from './SignUp.module.css'

export const SignUp = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

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

  const handleLogin = async (e) => {
    await dispatch(registerUser(form))
    alert(user.msg)
    history.push('/auth/sign-in')
  }
  return (
    <>
      <Helmet>
        <title>Sign Up - CoffeeTeria</title>
        <meta name='description' content='This is sign up page' />
      </Helmet>
      <div className={`container ${style.container}`}>
        <form className={`${style.form}`} onSubmit={handleLogin}>
          <span>Sign Up</span>
          <div>
            <InputAuth
              changeEvent={(e) => handleChange(e)}
              placeholder='Enter your email adress'
              label='Email Address :'
              name='email'
              type='email'
              id='email'
              required='required'
            />
            <InputAuth
              changeEvent={(e) => handleChange(e)}
              placeholder='Enter your password'
              label='Password :'
              name='password'
              type='password'
              id='password'
              required='required'
            />
            <InputAuth
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
    </>
  )
}
