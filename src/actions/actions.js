import axios from 'axios'

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})

export const setUser = (token) => {
  //debugger
  return(dispatch) => {
    axios
    .post(`http://localhost:3001/user`, {
      headers: {token: token}
    })
    .then((resp) => {
      //debugger
      dispatch({
        type: 'SET_USER',
        user: resp.data
      })
    })
    .catch((errors) => {
      //debugger
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

export const addNotebook = (token, notebook) => {
 return(dispatch) => {
   axios
   .post(`http://localhost:3001/notebooks`, {
     headers: {token: token},
     notebook: notebook
   })
   .then((resp) => {
     debugger
     dispatch({
       type: 'ADD_NOTEBOOK',
       notebook: resp.data
     })
   })
   .catch((errors) => {
     console.log(errors)
   })
 }
}

export function addToolbar(state){
  return {
    type: "ADD_TOOLBAR"
  }
}


export const saveNote = (token, note, title) => {
  debugger
 return(dispatch) => {
   axios
   .post(`http://localhost:3001/notes`, {
     headers: {token: token},
     note: {
       body: note,
       title: title
     }
   })
   .then((resp) => {
     debugger
     dispatch({
       type: 'SAVE_NOTE',
       note: resp.data
     })
   })
   .catch((errors) => {
     console.log(errors)
   })
 }
}

export const loadNotebook = (token, notebookid) => {
  debugger
  return(dispatch) => {
    axios
    .get(`http://localhost:3001/notebooks/${notebookid}`, {
      headers: {token: token}
    })
    .then((resp) => {
      debugger
      dispatch({
        type: 'LOAD_NOTEBOOK',
        notebook: resp.data
      })
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}

export const loadNote = (token, notebookid, noteid) => {
  debugger
  return(dispatch) => {
    axios
    .get(`http://localhost:3001/notebooks/${notebookid}/notes/${noteid}`, {
      headers: {token: token}
    })
    .then((resp) => {
      debugger
      dispatch({
        type: 'LOAD_NOTE',
        note: resp.data
      })
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}


export const addNote = (token, notebookId) => {
  debugger
  return(dispatch) => {
    axios
    .post(`http://localhost:3001/notebooks/${notebookId}/notes`, {
      headers: {token: token},
      notebookId: notebookId
    })
    .then((resp) => {
      debugger
      dispatch({
        type: 'ADD_NOTE',
        note: resp.data
      })
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}
