export default function manageSession(state = {
  token: ''
}, action) {
  switch(action.type) {
    case 'LOGIN':
    	debugger
      return {token: action.token}
    case 'LOGOUT':
      return {token: ''}
    default:
      return state
  }
}
