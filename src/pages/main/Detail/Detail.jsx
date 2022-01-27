import React, { useEffect } from 'react'
// components
import SideLeft from './SideLeft/SideLeft'
import SideRight from './SideRight/SideRight'
// react-router
import { useParams, Link } from 'react-router-dom'
// react-redux
import { useDispatch, useSelector } from 'react-redux'
// redux
import { getDetail } from '../../../redux/actions/product'
// style
import style from './detail.module.css'

const Detail = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const { id } = useParams()
  const dispatch = useDispatch()
  const { detail } = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  return (
    <div className={`${style.bg}`}>
      <div className={`container ${style.container}`}>
        <nav className={`${style.crumb}`} aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class={`breadcrumb-item`}>
              <Link style={link} to="/main/product">
                Product
              </Link>
            </li>
            <li
              class={`breadcrumb-item ${style.crumb_active}`}
              aria-current='page'>
              {detail.name}
            </li>
          </ol>
        </nav>
        <div className={`row ${style.main}`}>
          <SideLeft image={detail.image} />
          <SideRight name={detail.name} price={detail.price} />
        </div>
      </div>
    </div>
  )
}

export default Detail
