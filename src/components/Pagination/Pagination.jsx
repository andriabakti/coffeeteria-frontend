import React from 'react'
// pkgs: react-paginate
import ReactPaginate from 'react-paginate'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changePage } from '../../redux/actions/product'
// styles: module
import style from './Pagination.module.css'

export const Pagination = () => {
  const dispatch = useDispatch()
  const { pages } = useSelector((state) => state.product)

  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1
    dispatch(changePage(selectedPage))
  }
  return (
    <>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={parseInt(pages.total_page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={`${style.pagination}`}
        subContainerClassName={`${style.pagination}`}
        activeClassName={style.active}
      />
    </>
  )
}
