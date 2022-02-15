import React, { useState } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { login } from '../../../redux/actions/user'
// components: module
import { InputAuth } from '../../../components/InputAuth/InputAuth'
// styles: module
import style from './SignIn.module.css'

export const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

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

  const handleLogin = async (e) => {
    e.preventDefault()
    await dispatch(loginUser(form))
    await localStorage.setItem('token', user.token)
    alert('Login berhasil')
    history.push('/main/product')
  }

  return (
    <div className={`container ${style.container}`}>
      <Helmet>
        <title>Login - CoffeeTeria</title>
        <meta name='description' content='This is Login Page' />
      </Helmet>
      <form className={`${style.form}`} onSubmit={handleLogin}>
        <span>Login</span>
        <div>
          <InputAuth
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your email address'
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
          <button
            className={`btn ${style.btn_gold} ${(form.email === '' || form.password === '') && 'disabled'
              }`}
            type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
