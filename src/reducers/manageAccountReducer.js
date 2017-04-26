
export default function manageAccountReducer(state = {
  notebooks: [],
  notes: [],
  id: '',
  username: '',
  email: ''
}, action) {

  switch(action.type) {
    case 'SET_USER':
      return {
        notebooks: action.user.notebooks,
        notes: action.user.notes,
        id: action.user.id,
        username: action.user.username,
        email: action.user.email
      }

    case 'ADD_NOTEBOOK':
      return Object.assign({}, state,  {
        notebooks: state.notebooks.concat(action.notebook)
      })


    case 'DELETE_NOTEBOOK':
      const notebooks = state.notebooks.filter(notebook => notebook.id !== action.id);
      return Object.assign({}, state, {
        notebooks: notebooks
      })

    case 'ADD_NOTE':
      return Object.assign({}, state, {
        notes: [...state.notes, action.note]
      })


    case 'DELETE_NOTE':
      const notes = state.notes.filter(note => note.id !== action.id);
        return Object.assign({}, state, {
          notes: notes
  })

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
