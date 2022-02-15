// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const getProduct = (page, search, filter) => {
  return {
    type: 'GET_PRODUCT',
    payload: axiosApiInstances.get(
      `/product/?limit=9&page=${page}&filter=${filter}&search=${search}
      `
    )
  }
}

export const changePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    payload: page
  }
}

export const getDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: axiosApiInstances.get(`/product/${id}`)
  }
}

export const addProduct = (data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: axiosApiInstances.post('/product', data)
  }
}

export const changeDetail = (data) => {
  return {
    type: 'CHANGE_DETAIL',
    payload: data
  }
}

export const updateProduct = (id, data) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: axiosApiInstances.patch(`/product/${id}`, data)
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axiosApiInstances.delete(`/product/${id}`)
  }
}
