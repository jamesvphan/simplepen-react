// Import all reducers
import { combineReducers } from 'redux'
import notebookReducer from './notebookReducer'

// Use combineReducer to export rootReducer
const rootReducer = combineReducers({
  notebookReducer: notebookReducer
})

//export rootReducer
export default rootReducer
