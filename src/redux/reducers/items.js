const initialState = {
  items: []
}

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS': {
      return {
        ...state,
        items: [...state.items, ...action.payload]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default items