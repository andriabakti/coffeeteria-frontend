import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import style from './Pagination.module.css'
import { changePage } from '../../redux/actions/product'

export const Pagination = () => {
  const dispatch = useDispatch()
  const { pages } = useSelector((state) => state.product)

  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1
    dispatch(changePage(selectedPage))
  }
  return (
    <div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={parseInt(pages.total_page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={style.pagination}
        subContainerClassName={`pages ${style.pagination}`}
        activeClassName={style.active} />
    </div>
  )
};