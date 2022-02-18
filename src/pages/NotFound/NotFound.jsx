import React, { useEffect } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-redux

import { useDispatch } from 'react-redux'
// modules: redux-action
import {
  resetParams
} from '../../redux/actions/product'
// styles: module
import style from './NotFound.module.css'

export const NotFound = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetParams())
  }, [dispatch])
  return (
    <>
      <Helmet>
        <title>Not Found - CoffeeTeria</title>
        <meta name='description' content='Not Found' />
      </Helmet>
      <div className={`text-center ${style.body}`}>
        <h1>Page: Not Found</h1>
        <h2>404</h2>
        <h4>Page that you want to access is not exist <br />
          You probably not type the URL correctly</h4>
      </div>
    </>
  )
}
