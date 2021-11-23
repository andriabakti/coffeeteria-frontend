const initialState = {
  items: [],
  detail: {},
  isLoading: false,
  isError: false,
  msg: ''
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_ITEMS_FULFILLED':
      return {
        ...state,
        items: action.payload.data.data,
        isLoading: false,
        msg: action.payload.data.message
      }
    case 'GET_ITEMS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        items: [],
        msg: action.payload.response.data.message
      }
    case 'GET_DETAILS_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_DETAILS_FULFILLED':
      return {
        ...state,
        detail: action.payload.data.data[0],
        isLoading: false,
        msg: action.payload.data.message
      }
    case 'GET_DETAILS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        detail: [],
        msg: action.payload.response.data.message
      }
    default: {
      return {
        ...state
      }
    }
  }
}

export default items