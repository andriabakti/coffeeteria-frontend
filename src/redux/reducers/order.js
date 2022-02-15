const initialState = {
  isLoading: false,
  isError: false,
  history: [],
  msg: ''
}

const order = (state = initialState, action) => {
  switch (action.type) {
    // add orders
    case 'PURCHASE_ORDERS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PURCHASE_ORDERS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        msg: action.payload.data.message
      }
    }
    case 'PURCHASE_ORDERS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.message
      }
    }
    // all history
    case 'GET_ORDERS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_ORDERS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        history: action.payload.data.data,
        msg: action.payload.data.message
      }
    }
    case 'GET_ORDERS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        history: [],
        msg: action.payload.response.data.message
      }
    }
    default: {
      return state
    }
  }
}

export default order
