import axios from 'axios'

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})

// Make request to Rails API to create a new user, then dispatch LOGIN action
export const addUser = (state) => {
  return(dispatch) => {
    debugger
    axios
    .post('http://localhost:3001/users', {
      user: {
        username: state.username,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation
      }
    })
    .then((resp) => {
      debugger
      window.localStorage.setItem('current_user', resp.data.jwt)
      dispatch({
        type: 'LOGIN',
        token: resp.data.jwt
      })
    })
    .catch(resp => {
      debugger
    })
  }
}

export const login = (state) => {
  return(dispatch) => {
    axios
    .post('http://localhost:3001/sessions', {
      user: {
        username: state.username,
        password: state.password
      }
    })
    .then((resp) => {
      window.localStorage.setItem('current_user', resp.data.jwt)
      dispatch({
        type: 'LOGIN',
        token: resp.data.jwt
      })
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}
