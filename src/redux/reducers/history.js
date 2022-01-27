const initialState = {
  isLoading: false,
  isError: false,
  history: [],
  msg: ''
}

const history = (state = initialState, action) => {
  switch (action.type) {
    // all history
    case 'GET_HISTORY_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_HISTORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        items: action.payload.data.data,
        msg: action.payload.data.message
      }
    }
    case 'GET_HISTORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        history: [],
        msg: action.payload.response.data.message
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default history