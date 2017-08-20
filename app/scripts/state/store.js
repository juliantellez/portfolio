import _ from 'lodash'
import {
  createStore,
  applyMiddleware,
} from 'redux'

import reducers from 'src/state/reducers'

const thunkMiddleware = store =>
  dispatch =>
    action => {
      if (_.isFunction(action)) {
        return action(store)
      } else {
        return dispatch(action)
      }
    }

// ## Quick Reference:
// applyMiddleware = (..mw) => createStore
// createStore = (reducers, state) => store

const storeAndMiddleware = applyMiddleware(thunkMiddleware)
const store = storeAndMiddleware(createStore)(reducers)

export default store
