import { combineReducers } from 'redux';
import auth from './auth';
import items from './product';
import cart from './cart';
import history from './history'

const reducer = combineReducers({
  auth,
  items,
  cart,
  history
})

export default reducer