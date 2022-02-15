// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const purchaseOrder = (data) => {
  return {
    type: 'PURCHASE_ORDER',
    payload: axiosApiInstances.post('/history', data)
  }
}

export const getHistory = () => {
  return {
    type: 'GET_ORDER',
    payload: axiosApiInstances.get('/history')
  }
}
