import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

// import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      // thunk,
      promiseMiddleware,
      logger
    )
  )
)

export default store