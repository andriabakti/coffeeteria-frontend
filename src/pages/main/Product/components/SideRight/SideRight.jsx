import React, { useEffect } from 'react'
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

const SideRight = () => {
  const { items, isLoading } = useSelector((state) => state.items)
  const dispatch = useDispatch()
  const history = useHistory()
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
    <div className={`col-md-9 p-0 ${style.side_right}`}>
      <div
        className={`container-fluid
          ${isLoading ? style.loading : style.menu}`}>
        {isLoading ? (
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading</span>
          </div>
        ) : (
          items.map((item) => (
            <div className='col-md-3' key={item.id}>
              <ItemCard
                name={item.name}
                price={item.price}
                image={item.image}
                clickEvent={() => history.push(`/main/product/${item.id}`)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SideRight
