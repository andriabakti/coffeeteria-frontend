import React, { useEffect } from 'react'
// pkgs: query-string
import qs from 'query-string'
// pkgs: react-router
import { Link, useLocation, useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { getProfile } from '../../../redux/actions/user'
// assets: image
import blank from '../../../assets/images/blank_profile.jpg'
// assets: icon
import icon_search from '../../../assets/icons/icon_search.svg'
// styles: module
import style from './PartRight.module.css'

export const PartRight = () => {
  const history = useHistory()
  const { pathname, search } = useLocation()
  const { user, profile } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const parsed = qs.parse(search)
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
  useEffect(() => {
    user.token && dispatch(getProfile(user.id))
  }, [dispatch, user.id, user.token])

  return (
    <>
      {token ? (
        <div className={`col-lg-4 navbar-nav ${style.right}`}>
          <div className={`input-group ${style.search_bar}`}>
            <span className='input-group-prepend'>
              <button className={`btn shadow-none ${style.icon}`} type='button'>
                <img src={icon_search} alt='search' />
              </button>
            </span>
            <input
              className={`form-control border-0 shadow-none ${style.search}`}
              placeholder='Search'
              aria-label='Search'
              onKeyPress={handleSearch}
              type='search'
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
            <img src={profile.image ? profile.image : blank} alt='profile' />
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