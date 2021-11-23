import { combineReducers } from 'redux';
import auth from './auth';
import items from './product';

const reducer = combineReducers({
  items,
  auth
})

export default reducer