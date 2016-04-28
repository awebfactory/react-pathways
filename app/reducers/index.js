import { combineReducers } from 'redux'
import {
  SELECT_PATH, INVALIDATE_PATH,
  REQUEST_STEPS, RECEIVE_STEPS
} from '../actions'

function selectedPath(state = 'basicDefault', action) {
  switch (action.type) {
    case SELECT_PATH:
      return action.path
    default:
      return state
  }
}

function steps(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_PATH:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_STEPS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_STEPS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.steps,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function stepsByPath(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_PATH:
    case RECEIVE_STEPS:
    case REQUEST_STEPS:
      return Object.assign({}, state, {
        [action.selectedPath]: steps(state[action.selectedPath], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  stepsByPath,
  selectedPath
})

export default rootReducer