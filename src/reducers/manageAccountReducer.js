export default function manageAccountReducer(state = {
  notebooks: null,
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
    default:
    return state
  }
}
