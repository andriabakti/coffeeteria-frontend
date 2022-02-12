import React, { useEffect, useState } from 'react'
// react-custom-scrollbars
// import { Scrollbars } from 'react-custom-scrollbars-2'
// react-router
import { useHistory } from 'react-router-dom'
// react-redux
import { useSelector, useDispatch } from 'react-redux'
// redux
import { getData } from '../../../../../redux/actions/product'
// components
import ItemCard from '../../../../../components/module/Cards/Cards'
// style
import style from './side_right.module.css'
import ModalCreate from '../../../../../components/module/ModalCreate/ModalCreate'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import Pagination from '../../../../../components/module/Pagination/Pagination'
import Tabs from '../../../../../components/module/Tabs/Tabs'
// import CardBox from '../CardBox/CardBox'

const SideRight = () => {
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
      getData(
        page,
        parsed.search !== undefined ? parsed.search : '',
        parsed.filter !== undefined ? parsed.filter : ''
      )
    )
  }, [dispatch, location, page])
  return (
    <div className={`col-md-9 p-0 ${style.container}`}>
      <Tabs />
      <div className={`${isLoading ? style.loading : style.menu}`}>
        {isLoading || items.length <= 0 ? (
          <div className='spinner-border text-warning' role='status'>
            <span className='visually-hidden'>Loading</span>
          </div>
        ) : (
          <div className={`${style.card}`}>
            {items.map((item) => (
              <div className={`col-md-3`} key={item.id}>
                <ItemCard
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

export default SideRight
