import React, { useEffect } from 'react'
// components
import SideLeft from './SideLeft/SideLeft'
import SideRight from './SideRight/SideRight'
import Footer from '../../../components/module/Footer/Footer'
// react-helmet
import { Helmet } from 'react-helmet'
// react-router
import { useParams, Link } from 'react-router-dom'
// react-redux
import { useDispatch, useSelector } from 'react-redux'
// redux
import { getDetail } from '../../../redux/actions/product'
import { addCart } from '../../../redux/actions/cart'
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

  const handleAddCart = (items) => {
    dispatch(addCart({ ...detail, ...items }))
    alert(`${detail.name} berhasil ditambahkan ke keranjang`)
  }

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  return (
    <div className={`${style.container}`}>
      <Helmet>
        <title>{`${detail.name} - CoffeeTeria`}</title>
        <meta name='description' content='This is Product Detail Page' />
      </Helmet>
      <div className={`${style.main}`}>
        <div className={`container ${style.content}`}>
          <nav className={`${style.crumb}`} aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className={`breadcrumb-item`}>
                <Link style={link} to="/main/product" className={`${style.crumb_page}`}>
                  Product
                </Link>
              </li>
              <li
                className={`breadcrumb-item ${style.crumb_active}`}
                aria-current='page'>
                {detail.name}
              </li>
            </ol>
          </nav>
          <div className={`row ${style.section}`}>
            <SideLeft image={detail.image} />
            <SideRight detail={detail} addToCart={handleAddCart} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Detail
