// import { combineReducers } from 'redux';
import auth from './auth';
import user from './user'
import product from './product';
import cart from './cart';
import order from './order'

const reducer = {
  auth,
  user,
  product,
  cart,
  order,
}

export default reducer