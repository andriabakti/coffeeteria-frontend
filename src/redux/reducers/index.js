// import { combineReducers } from 'redux';
import auth from './auth';
import items from './product';
import cart from './cart';
import order from './order'
import user from './user'

const reducer = {
  auth,
  items,
  cart,
  order,
  user
}

export default reducer