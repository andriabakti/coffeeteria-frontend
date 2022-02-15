const initialState = {
  items: [],
  pages: {},
  detail: {},
  detailTemp: {},
  isLoading: false,
  isError: false,
  msg: ''
}

const product = (state = initialState, action) => {
  switch (action.type) {
    // all products
    case 'GET_ITEMS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_ITEMS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: action.payload.data.data,
        pages: action.payload.data.page_info,
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
    // product details
    case 'GET_DETAILS_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_DETAILS_FULFILLED':
      return {
        ...state,
        detail: action.payload.data.data[0],
        detailTemp: action.payload.data.data[0],
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'GET_DETAILS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        detail: [],
        msg: action.payload.response.data.message
      }
    // add new product
    case 'ADD_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'ADD_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'ADD_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    // edit page
    case 'CHANGE_PAGE':
      return {
        ...state,
        pages: {
          current_page: action.payload
        }
      }
    // edit detail
    case 'CHANGE_DETAIL': {
      return {
        ...state,
        detailTemp: {
          ...state.detailTemp,
          ...action.payload
        }
      }
    }
    // edit product
    case 'UPDATE_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'UPDATE_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'UPDATE_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    // delete product
    case 'DELETE_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'DELETE_PRODUCT_FULFILLED':
      return {
        ...state,
        msg: action.payload.data.message,
        isLoading: false,
        isError: false
      }
    case 'DELETE_PRODUCT_REJECTED':
      return {
        ...state,
        msg: action.payload.response.data.message,
        isLoading: false,
        isError: true
      }
    default: {
      return state
    }
  }
}

export default product
