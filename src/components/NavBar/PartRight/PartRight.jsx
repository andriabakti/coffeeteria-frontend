import React from 'react'
// react-router
import { Link, useLocation, useHistory } from 'react-router-dom'
import style from './PartRight.module.css'
import blank from '../../../assets/images/blank_profile.jpg'
import qs from 'query-string'
import { useSelector } from 'react-redux'

const PartRight = () => {
  const { pathname, search } = useLocation()
  const { detail } = useSelector((state) => state.user)
  const parsed = qs.parse(search)
  const history = useHistory()
  const token = localStorage.getItem('token')
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const handleSearch = (e) => {
    e.key === 'Enter' &&
      history.push(
        `/main/product?${parsed.filter ? `filter=${parsed.filter}&` : ''
        }search=${e.target.value}`
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
              name='search'
            />
          </div>
          <Link
            to='/main/profile'
            className={
              pathname === '/main/profile'
                ? `${style.profile_on}`
                : `${style.profile}`
            }>
            <img src={detail.image ? detail.image : blank} alt='profile' />
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
