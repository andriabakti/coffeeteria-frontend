import axiosApiInstances from '../../utils/axios'

export const getUserDetail = (id) => {
  return {
    type: 'GET_USER_DETAIL',
    payload: axiosApiInstances.get(`/user/${id}`)
  }
}

export const changeProfile = (data) => {
  return {
    type: 'CHANGE_PROFILE',
    payload: data
  }
}

export const resetChange = () => {
  return {
    type: 'RESET_CHANGE'
  }
}

export const updateProfile = (data, id) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axiosApiInstances.patch(`/user/${id}`, data)
  }
}