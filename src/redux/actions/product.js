import axiosApiInstances from '../../utils/axios'

export const getData = () => {
  return {
    type: 'GET_ITEMS',
    payload: axiosApiInstances.get(`/product/?limit=8&page=1`)
  }
}

export const getDetail = (id) => {
  return {
    type: 'GET_DETAILS',
    payload: axiosApiInstances.get(`/product/${id}`)
  }
}