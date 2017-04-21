// Import all reducers
import { combineReducers } from 'redux'
// import notebookReducer from './notebookReducer'
import noteReducer from './noteReducer'
import manageSessionReducer from './manageSessionReducer'
import manageAccountReducer from './manageAccountReducer'


// Use combineReducer to export rootReducer
const rootReducer = combineReducers({
  noteReducer: noteReducer,
  session: manageSessionReducer,
  account: manageAccountReducer,

})


//export rootReducer
export default rootReducer
