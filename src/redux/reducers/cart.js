const initialState = {
  cart: {},
  count: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECREASE': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default cart