import axiosApiInstances from '../../utils/axios';

export const purchaseOrders = (data) => {
  return {
    type: 'PURCHASE_ORDERS',
    payload: axiosApiInstances.post('/history', data)
  }
}

export const getHistory = () => {
  return {
    type: 'GET_ORDERS',
    payload: axiosApiInstances.get('/history')
  }
}
