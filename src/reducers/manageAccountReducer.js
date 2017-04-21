export default function manageAccountReducer(state = {
  notebooks: [
    {
      id: '',
      title: '',
      description: '',
      notes: []
    }
  ],
  id: '',
  username: '',
  email: ''
}, action) {

  switch(action.type) {
    case 'SET_USER':
      return {
        notebooks: action.user.notebooks,
        id: action.user.id,
        username: action.user.username,
        email: action.user.email
      }

    case 'ADD_NOTEBOOK':
    return Object.assign({}, state,  {
      notebooks: state.notebooks.concat(action.notebook)
    })

    default:
    return state
  }
}
