import React, { useEffect } from 'react'
// react-custom-scrollbars
// import { Scrollbars } from 'react-custom-scrollbars-2'
// react=bootstrap
import { Spinner } from 'react-bootstrap'
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

const SideRight = () => {
  const { items, isLoading } = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  return (
    <div className={`col-md-9 p-0 ${style.side_right}`}>
      <div
        className={`container-fluid
          ${isLoading ? style.loading : style.menu}`}>
        {isLoading ? (
          <Spinner animation='border' variant='secondary' />
        ) : (
          items.map(item => (
            <div className='col-md-3' key={item.id}>
              <ItemCard
                name={item.name}
                price={item.price}
                image={item.image}
                clickEvent={() =>
                  history.push(`/main/product/${item.id}`)
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SideRight
