import React, { useState, useEffect } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useParams, useHistory, Link } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import {
  getProduct,
  getDetail,
  changeDetail,
  updateProduct
} from '../../../redux/actions/product'
import { addCart } from '../../../redux/actions/cart'
// components: side
import { SideLeft } from './SideLeft/SideLeft'
import { SideRight } from './SideRight/SideRight'
import { SideEdit } from './SideEdit/SideEdit'
// styles: module
import style from './Detail.module.css'

export const Detail = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const { id } = useParams()
  const dispatch = useDispatch()
  const { detail, detailTemp } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.user)
  const [image, setImage] = useState()
  const history = useHistory()

  const handleImage = (e) => {
    const fileImage = e.target.files[0]
    setImage(fileImage)
    dispatch(
      changeDetail({
        image: URL.createObjectURL(fileImage)
      })
    )
  }

  const formData = new FormData()
  formData.append('name', detailTemp.name)
  formData.append('price', detailTemp.price)
  formData.append('image', image)
  formData.append('description', detailTemp.description)
  formData.append('category_id', detailTemp.category_id)

  const editProduct = async () => {
    await dispatch(updateProduct(detail.id, formData))
    alert('Product berhasil diupdate')
    await dispatch(getProduct(1, '', ''))
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
    <>
      <Helmet>
        <title>{`${detail.name} - CoffeeTeria`}</title>
        <meta name='description' content='This is Product Detail Page' />
      </Helmet>
      <div className={`${style.container}`}>
        <div className={`container ${style.content}`}>
          <nav className={`${style.crumb}`} aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className={`breadcrumb-item`}>
                <Link
                  style={link}
                  to='/main/product'
                  className={`${style.crumb_page}`}>
                  Product
                </Link>
              </li>
              <li
                className={`breadcrumb-item ${style.crumb_active}`}
                aria-current='page'>
                {detail.name}
              </li>
              {user.role === 'admin' && (
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
            {user.role !== 'admin' ? (
              <SideRight detail={detail} addToCart={handleAddCart} />
            ) : (
              <SideEdit handleUpdate={editProduct} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
