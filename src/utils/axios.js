import axios from 'axios';

const axiosApiInstances = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
})

axiosApiInstances.interceptors.request.use(function (config) {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosApiInstances.interceptors.response.use(
  function (response) {
    return response
  }, function (error) {
    if (error.response.status === 403) {
      alert('Please Login !')
      localStorage.clear()
      window.location.href = '/auth/sign-in'
    }
    return Promise.reject(error)
  }
)

export default axiosApiInstances