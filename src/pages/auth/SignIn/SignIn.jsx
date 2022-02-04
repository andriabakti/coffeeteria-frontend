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
import { login } from '../../../redux/actions/auth'
// style
import style from './sign_in.module.css'

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
        localStorage.setItem('token', result.value.data.data.token)
        // localStorage.setItem('token', loginState.data.token)
        alert('Login berhasil')
        history.push('/main/product')
      })
      .catch((error) => {
        console.log(error)
      })
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
          <Input
            changeEvent={(e) => handleChange(e)}
            placeholder='Enter your email address'
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

export default SignIn
