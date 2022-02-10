const initialState = {
  msg: '',
  detail: {},
  detailTemp: {},
  isLoading: false,
  isError: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    // get user details
    case 'GET_USER_DETAIL_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_USER_DETAIL_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        detail: action.payload.data.data[0],
        detailTemp: { ...state.detail },
        isLoading: false,
        isError: false
      }
    }
    case 'GET_USER_DETAIL_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        detail: {},
        detailTemp: {},
        isLoading: false,
        isError: true
      }
    }
    // change temp detail
    case 'CHANGE_PROFILE': {
      return {
        ...state,
        detailTemp: {
          ...state.detailTemp,
          ...action.payload
        }
      }
    }
    // update user profile
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    }
    default: {
      return state
    }
  }
}

export default user