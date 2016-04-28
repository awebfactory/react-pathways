import { combineReducers } from 'redux'
import { stepsByPath, selectedPath } from './paths'

const rootReducer = combineReducers({
  stepsByPath,
  selectedPath
})

export default rootReducer