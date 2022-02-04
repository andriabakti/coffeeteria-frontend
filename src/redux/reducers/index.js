// import { combineReducers } from 'redux';
import auth from './auth';
import items from './product';
import cart from './cart';
import order from './order'

const reducer = {
  auth,
  items,
  cart,
  order,
}

export default reducer