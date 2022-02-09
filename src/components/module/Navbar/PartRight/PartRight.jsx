import React from 'react'
// react-router
import { Link, useLocation, useHistory } from 'react-router-dom'
import style from './PartRight.module.css'
import blank from '../../../../assets/blank_profile.jpg'

const PartRight = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const token = localStorage.getItem('token')
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }

  const handleSearch = (e) => {
    e.key === 'Enter' && (
      history.push(`/main/product?search=${e.target.value}`)
    )
  }
  return (
    <>
      {token ? (
        <div className={`col-lg-4 navbar-nav ${style.right}`}>
          <div className='d-flex'>
            <i className='far fa-search icon'></i>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onKeyPress={handleSearch}
            />
          </div>
          <Link
            to='/main/profile'
            className={
              pathname === '/main/profile'
                ? `${style.profile_on}`
                : `${style.profile}`
            }>
            <img src={blank} alt='profile' />
          </Link>
        </div>
      ) : (
        <div className={`col-lg-4 navbar-nav ${style.right}`}>
          <div className='nav-link'>
            <Link to='/auth/sign-in' style={link} className={`${style.login}`}>
              Login
            </Link>
          </div>
          <Link to='/auth/sign-up'>
            <button className={`btn ${style.btn_gold}`} type='button'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default PartRight
