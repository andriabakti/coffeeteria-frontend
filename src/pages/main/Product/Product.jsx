import React from 'react'
// component
import SideLeft from './components/SideLeft/SideLeft'
import SideRight from './components/SideRight/SideRight'
import Footer from '../../../components/module/Footer/Footer'
// react-helmet
import { Helmet } from 'react-helmet'
// style
import style from './product.module.css'

const Product = () => {
  return (
    <div className={`col ${style.container}`}>
      <Helmet>
        <title>Products - CoffeeTeria</title>
        <meta name='description' content='This is Product Page' />
      </Helmet>
      <div className={`container-fluid ${style.main}`}>
        <div className='row'>
          <SideLeft />
          <SideRight />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Product
