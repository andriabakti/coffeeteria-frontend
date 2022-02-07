import axiosApiInstances from '../../utils/axios'

export const getData = () => {
  return {
    type: 'GET_ITEMS',
    payload: axiosApiInstances.get(`/product/?limit=12&page=1`)
  }
}

export const getDetail = (id) => {
  return {
    type: 'GET_DETAILS',
    payload: axiosApiInstances.get(`/product/${id}`)
  }
}

export const addProduct = (data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: axiosApiInstances.post('/product', data)
  }
}

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axiosApiInstances.delete(`/product/${id}`)
  }
}