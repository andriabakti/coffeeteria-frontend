import React from 'react'
import { useHistory } from 'react-router-dom'
import style from './TabsBar.module.css'

const TabsBar = () => {
  const history = useHistory()
  return (
    <ul className={`nav justify-content-center ${style.wrapper}`}>
      <li className='nav-item'
        onClick={() =>
          history.push(`/main/product`)
        }>
        <span className='nav-link' aria-current='page'>
          All Product
        </span>
      </li>
      <li
        className='nav-item'
        onClick={() =>
          history.push(`/main/product?filter=${1}`)
        }>
        <span className='nav-link'>Coffee</span>
      </li>
      <li
        className='nav-item'
        onClick={() =>
          history.push(`/main/product?filter=${2}`)
        }>
        <span className='nav-link'>Non Coffee</span>
      </li>
      <li
        className='nav-item'
        onClick={() =>
          history.push(`/main/product?filter=${3}`)
        }>
        <span className='nav-link'>Foods</span>
      </li>
      <li
        className='nav-item'
        onClick={() =>
          history.push(`/main/product?filter=${4}`)
        }>
        <span className='nav-link'>Add-on</span>
      </li>
    </ul>
  )
}

export default TabsBar
