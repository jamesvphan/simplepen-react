// Import all reducers
import { combineReducers } from 'redux'
import notebookReducer from './notebookReducer'
import noteReducer from './noteReducer'
import addTokenReducer from './addTokenReducer'
import manageSessionReducer from './manageSessionReducer'


// Use combineReducer to export rootReducer
const rootReducer = combineReducers({
  notebooks: notebookReducer,
  noteReducer: noteReducer,
  addToken: addTokenReducer,
  session: manageSessionReducer
})


//export rootReducer
export default rootReducer
