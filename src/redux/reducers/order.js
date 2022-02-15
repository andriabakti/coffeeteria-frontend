const initialState = {
  msg: '',
  history: [],
  isLoading: false,
  isError: false
}

export const order = (state = initialState, action) => {
  switch (action.type) {
    // Order: Purchase
    case 'PURCHASE_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PURCHASE_ORDER_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    }
    case 'PURCHASE_ORDER_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    }
    // History: Fetch
    case 'GET_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_ORDER_FULFILLED': {
      return {
        ...state,
        msg: action.payload.data.message,
        history: action.payload.data.data,
        isLoading: false,
        isError: false
      }
    }
    case 'GET_ORDER_REJECTED': {
      return {
        ...state,
        msg: action.payload.response.data.message,
        history: [],
        isLoading: false,
        isError: true
      }
    }
    default: {
      return state
    }
  }
}
