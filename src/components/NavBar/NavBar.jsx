import React from 'react'
// react-router
import { Link } from 'react-router-dom'
// style
import style from './NavBar.module.css'
// assets
import logo from '../../assets/icons/icon.svg'
import PartCenter from './PartCenter/PartCenter'
import PartRight from './PartRight/PartRight'

const NavBar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-white ${style.nav}`}>
      <div className={`container ${style.container}`}>
        <div className={`col-lg-4`}>
          <Link to='/main' className={`navbar-brand ${style.brand}`} >
            <img alt='CoffeeTeria' height='30px' width='30px' src={logo} />
            <span>CoffeeTeria</span>
          </Link>
        </div>
        <PartCenter />
        <PartRight />
      </div>
    </nav>
  )
}

export default NavBar
