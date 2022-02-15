// modules: axios-instance
import axiosApiInstances from '../../utils/axios'

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axiosApiInstances.post('/auth/sign-up', data)
  }
}

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axiosApiInstances.post('/auth/sign-in', data)
  }
}
