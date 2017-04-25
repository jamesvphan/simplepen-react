export default function manageSession(state = {
  token: ''
}, action) {
  switch(action.type) {
    case 'LOGIN':
    	debugger
      return {token: action.token}
    case 'LOGOUT':
      return {token: ''}
      debugger 
    default:
      return state
  }
}
