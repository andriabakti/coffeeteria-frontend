import axiosApiInstances from '../../utils/axios'

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axiosApiInstances.post('/auth/sign-in', data)
  }
}