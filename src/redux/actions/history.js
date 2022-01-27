import axiosApiInstances from '../../utils/axios';

export const getHistory = () => {
  return {
    type: 'GET_HISTORY',
    payload: axiosApiInstances.get('/history')
  }
}