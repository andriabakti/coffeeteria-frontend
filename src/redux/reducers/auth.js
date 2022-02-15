const initialState = {
  isLoading: false,
  isError: false,
  profile: {},
  msg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    // register
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.message
      }
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message
      }
    // login
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        profile: action.payload.data.data,
        msg: action.payload.data.message
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        profile: {},
        msg: action.payload.response.data.message
      }
    default:
      return state
  }
}

export default auth
