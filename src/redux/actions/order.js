// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const purchaseOrder = (data) => {
  return {
    type: 'PURCHASE_ORDER',
    payload: axiosApiInstances.post('/order', data)
  }
}

export const getHistory = (page, id) => {
  return {
    type: 'GET_ORDER',
    payload: axiosApiInstances.get(`/order/${id}?limit=12&page=${page}`)
  }
}

export const updatePage = (page) => {
  return {
    type: 'CHANGE_PAGE',
    payload: page
  }
}