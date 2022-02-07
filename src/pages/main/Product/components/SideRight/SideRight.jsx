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
import ModalCreate from '../ModalCreate/ModalCreate'

const SideRight = () => {
  const { items, isLoading } = useSelector((state) => state.items)
  const { profile } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)

  // const [page, setPage] = useState(1)

  // const handleScroll = () => {
  // setPage(page + 1)
  // setPage((current) => current + 1)
  // }
  // window.onscroll = () => {
  // if (
  //   window.innerHeight + document.documentElement.scrollTop + 50 >=
  //   document.documentElement.offsetHeight
  // document.documentElement.scrollTop >= 3000
  // ) {
  // handleScroll()
  // }
  // }

  useEffect(() => {
    // console.log('inner height:', window.innerHeight);
    // console.log('document scrolltop:', document.documentElement.scrollTop);
    // console.log('document offset height:', document.documentElement.offsetHeight);
    // {/* <h2>Page: {page}</h2> */}
    dispatch(getData())
  }, [dispatch])
  return (
    <div className={`col-md-9 p-0 ${style.container}`}>
      <div
        className={`${isLoading ? style.loading : style.menu}`}>
        {isLoading || items.length <= 0 ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading</span>
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
                // deleteEvent={}
                />
              </div>
            ))}
          </div>
        )}
        {profile.role === 'admin' && (
          <button className={`btn text-white ${style.btn_create}`} onClick={handleShow}>
            Add new product
          </button>
        )}
      </div>
      <ModalCreate show={show} onHide={handleShow} />
    </div>
  )
}

export default SideRight
