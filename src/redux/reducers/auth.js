const initialState = {
  onLogin: false,
  email: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_VISIT_LOGIN': {
      return {
        ...state,
        onLogin: !state.onLogin
      }
    }
    case 'CHANGE_EMAIL': {
      return {
        ...state,
        email: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth