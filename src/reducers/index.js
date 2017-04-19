// Import all reducers
import { combineReducers } from 'redux'
import notebookReducer from './notebookReducer'
import noteReducer from './noteReducer'


// Use combineReducer to export rootReducer
const rootReducer = combineReducers({
  notebooks: notebookReducer,
  noteReducer: noteReducer
})


//export rootReducer
export default rootReducer
