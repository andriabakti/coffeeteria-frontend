const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        // isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.message
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.message
      }
    default:
      return state
  }
}

export default auth