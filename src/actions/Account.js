import axios from 'axios'

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})

export const setUser = (token) => {
  debugger
  return(dispatch) => {
    axios
    .post(`http://localhost:3001/user`, {
      headers: {token: token}
    })
    .then((resp) => {
      debugger
      dispatch({
        type: 'SET_USER',
        user: resp.data
      })
    })
    .catch((errors) => {
      debugger
      console.log(errors)
    })
  }
}


// Make request to Rails API to create a new user, then dispatch LOGIN action
export const addUser = (state) => {
 debugger
  return(dispatch) => {

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
      window.localStorage.setItem('token', resp.data.jwt)
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
    .post('http://localhost:3001/sessions',
    {
      username: state.username,
      password: state.password
    })
    .then((resp) => {
      window.localStorage.setItem('token', resp.data.jwt)
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
