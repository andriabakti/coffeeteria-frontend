import React, { useState, useEffect } from 'react'
// pkgs: query-string
import qs from 'query-string'
// pkgs: react-router
import { useHistory, useLocation } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { getProduct } from '../../../../redux/actions/product'
// components: module
import { CardProduct } from '../../../../components/CardProduct/CardProduct'
import { Pagination } from '../../../../components/Pagination/Pagination'
import { TabsBar } from '../../../../components/TabsBar/TabsBar'
import { ModalCreate } from '../../../../components/ModalCreate/ModalCreate'
// styles: module
import style from './SideRight.module.css'

export const SideRight = () => {
  const { items, pages, isLoading } = useSelector((state) => state.product)
  const { profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  const location = useLocation()
  const page = pages.current_page

  useEffect(() => {
    const parsed = qs.parse(location.search)
    dispatch(
      getProduct(
        page,
        parsed.search !== undefined ? parsed.search : '',
        parsed.filter !== undefined ? parsed.filter : ''
      )
    )
  }, [dispatch, location, page])
  return (
    <div className={`col-md-9 p-0 ${style.container}`}>
      <TabsBar />
      <div className={`${isLoading ? style.loading : style.menu}`}>
        {isLoading || items.length <= 0 ? (
          <div className='spinner-border text-warning' role='status'>
            <span className='visually-hidden'>Loading</span>
          </div>
        ) : (
          <div className={`${style.card}`}>
            {items.map((item) => (
              <div className={`col-md-3`} key={item.id}>
                <CardProduct
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  clickEvent={() => history.push(`/main/product/${item.id}`)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination />
      {profile.role === 'admin' && (
        <button
          className={`btn text-white ${style.btn_create}`}
          onClick={handleShow}>
          Add new product
        </button>
      )}
      <ModalCreate show={show} onHide={handleShow} />
    </div>
  )
}
