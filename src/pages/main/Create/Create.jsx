import React, { useState } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { Link, useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { addProduct, getProduct } from '../../../redux/actions/product'
//
import { NotFound } from '../../NotFound/NotFound'
// components: base
import { ModalConfirm } from '../../../components/base/ModalConfirm/ModalConfirm'
// components: module
import { SideLeft } from './SideLeft/SideLeft'
import { SideRight } from './SideRight/SideRight'
// styles: module
import style from './Create.module.css'

export const Create = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  // const ref = useRef()
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [show, setShow] = useState(false)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    desc: '',
    category: ''
  })

  const formData = new FormData()
  formData.append('name', product.name)
  formData.append('price', parseInt(product.price))
  formData.append('image', image)
  formData.append('description', product.desc)
  formData.append('category_id', product.category)

  const handleShow = () => setShow(!show)
  const handleImage = (e) => {
    setImage(e.target.files[0])
    handlePreview(e.target.files[0])
  }
  const handlePreview = (file) => {
    const temp = URL.createObjectURL(file)
    setPreview(temp)
  }
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }
  const handleCreate = async () => {
    await dispatch(addProduct(formData))
    alert('New product added successfully')
    await dispatch(getProduct(1, '', ''))
    history.push('main/product')
  }

  if (user.role !== 'admin') {
    return (
      <NotFound />
    )
  } else {
    return (
      <>
        <Helmet>
          <title>New Product - CoffeeTeria</title>
          <meta name='description' content='This is New Product Page' />
        </Helmet>
        <div className={`${style.wrapper}`}>
          <div className={`container ${style.container}`}>
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
                  Add new product
                </li>
              </ol>
            </nav>
            <div className={`row ${style.content}`}>
              <SideLeft
                preview={preview}
                getImage={handleImage}
              />
              <SideRight
                getChange={handleChange}
                confirmAdd={handleShow}
              />
            </div>
          </div>
        </div>
        <ModalConfirm
          show={show}
          onHide={handleShow}
          text='add this new product'
          eventClick={handleCreate}
          btnBack='Cancel'
          btnConfirm='Create'
        />
      </>
    )
  }
}
