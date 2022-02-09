import React, { useEffect, useState } from 'react'
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
import { getDetail, changeDetail, updateProduct } from '../../../redux/actions/product'
import { addCart } from '../../../redux/actions/cart'
// style
import style from './Detail.module.css'
import SideEditRight from './SideEditRight/SideEditRight'
import { useHistory } from 'react-router-dom'


const Detail = () => {

  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const { id } = useParams()
  const dispatch = useDispatch()
  const { detail } = useSelector((state) => state.items)
  const { profile } = useSelector((state) => state.auth)
  const [image, setImage] = useState()
  const history = useHistory()

  const handleImage = (e) => {
    const fileImage = e.target.files[0]
    setImage(fileImage)
    dispatch(changeDetail({
      image: URL.createObjectURL(fileImage)
    }))
  }

  const formData = new FormData()
  formData.append('name', detail.name)
  formData.append('price', detail.price)
  formData.append('image', image)
  formData.append('description', detail.description)
  formData.append('category_id', detail.category_id)

  const editProduct = async () => {
    await dispatch(updateProduct(formData, detail.id))
    alert('Product berhasil diupdate')
    history.push('/main/product')
  }

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
              {profile.role !== 'admin' ? (
                <li
                  className={`breadcrumb-item ${style.crumb_active}`}
                  aria-current='page'>
                  {detail.name}
                </li>) : (
                <li
                  className={`breadcrumb-item ${style.crumb_active}`}
                  aria-current='page'>
                  Edit product
                </li>
              )}
            </ol>
          </nav>
          <div className={`row ${style.section}`}>
            <SideLeft image={detail.image} changeImage={handleImage} />
            {profile.role !== 'admin' ? (
              <SideRight detail={detail} addToCart={handleAddCart} />
            ) : (
              <SideEditRight handleUpdate={editProduct} />
            )
            }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Detail
