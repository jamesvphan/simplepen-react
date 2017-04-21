const initialState = {
    id: '',
    username: '',
    email: '',
    notebooks: []
}
export default function manageAccountReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_USER':
    debugger
      return Object.assign({}, state, action.user)
    default:
    return state
  }
}

// this is the account, i keep an array of notebooks so that i can set it later when i load the user,

//however problem arises when i wanted to add a notebook and perform separation of concerns. i want to add using a notebook reducer

// do i separate and dispatch "same" action for two reducers
//ex . action=> LOAD_USER
//reducer 1 will load account info
//reducer 2 will load notebooks
