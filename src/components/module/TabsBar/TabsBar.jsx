import React from 'react'
// pkgs: react-router
import { useHistory, useLocation } from 'react-router-dom'
// styles: module
import style from './TabsBar.module.css'

export const TabsBar = () => {
  const history = useHistory()
  const { search } = useLocation()

  return (
    <ul className={`nav ${style.wrapper}`}>
      <li
        className={`nav-item ${search === '' ? style.tabs_on : style.tabs}`}
        onClick={() => history.push(`/main/product`)}>
        <span className='nav-link' aria-current='page'>
          All Product
        </span>
      </li>
      <li
        className={`nav-item ${search === '?filter=1' ? style.tabs_on : style.tabs}`}
        onClick={() => history.push(`/main/product?filter=${1}`)}>
        <span className='nav-link'>Coffee</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=2' ? style.tabs_on : style.tabs}`}
        onClick={() => history.push(`/main/product?filter=${2}`)}>
        <span className='nav-link'>Non Coffee</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=3' ? style.tabs_on : style.tabs}`}
        onClick={() => history.push(`/main/product?filter=${3}`)}>
        <span className='nav-link'>Foods</span>
      </li>
      <li
        className={`nav-item ${search === '?filter=4' ? style.tabs_on : style.tabs}`}
        onClick={() => history.push(`/main/product?filter=${4}`)}>
        <span className='nav-link'>Add-on</span>
      </li>
    </ul>
  )
}
