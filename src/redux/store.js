import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'

// import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

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