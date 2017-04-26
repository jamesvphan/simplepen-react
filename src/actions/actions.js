import axios from 'axios'

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
})

export const setUser = (token) => {
  return(dispatch) => {
    axios
    .post(`http://localhost:3001/user`, {
      headers: {token: token}
    })
    .then((resp) => {

      dispatch({
        type: 'SET_USER',
        user: resp.data
      })
    })
    .catch((errors) => {

      console.log(errors)
    })
  }
}


// Make request to Rails API to create a new user, then dispatch LOGIN action
export const addUser = (state) => {
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

      window.localStorage.setItem('token', resp.data.jwt)
      dispatch({
        type: 'LOGIN',
        token: resp.data.jwt
      })
    })
    .catch(resp => {

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


export const logout = (token) => {
  window.localStorage.removeItem("token")
  return {
    type: "LOGOUT"
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


export const deleteNotebook = (token, notebookId) => {
 return(dispatch) => {
   axios
   .delete(`http://localhost:3001/notebooks/${notebookId}`, {
     headers: {token: token},
     notebookId: notebookId
   })
   .then((resp) => {

     dispatch({
       type: 'DELETE_NOTEBOOK',
       id: resp.data
     })
   })
   .catch((errors) => {

     console.log(errors)
   })
 }
}


// export const deleteNote = (token, data) => {
//
//   return(dispatch) => {
//     axios
//     .delete(`http://localhost:3001/notebooks/${data.notebookId}/notes/${data.noteId}`, {
//       headers: {token: token},
//       notebookId: notebookId
//     })
//     .then((resp) => {
//
//       dispatch({
//         type: 'DELETE_NOTE',
//         note: resp.data
//       })
//     })
//     .catch((errors) => {
//
//       console.log(errors)
//     })
//   }
// }


export function addToolbar(state){
  return {
    type: "ADD_TOOLBAR"
  }
}

export const saveNote = (token, data) => {

  return(dispatch) => {
    axios
    .patch(`http://localhost:3001/notebooks/${data.notebookId}/notes/${data.noteId}`, data, {
      headers: {token: token}
    })
    .then((resp) => {

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
  return(dispatch) => {
    axios
    .get(`http://localhost:3001/notebooks/${notebookid}`, {
      headers: {token: token}
    })
    .then((resp) => {

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
  return(dispatch) => {
    axios
    .get(`http://localhost:3001/notebooks/${notebookid}/notes/${noteid}`, {
      headers: {token: token}
    })
    .then((resp) => {
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


export const addNote = (token, notebookId, title) => {
  return(dispatch) => {
    axios
    .post(`http://localhost:3001/notebooks/${notebookId}/notes`, {
      headers: {token: token},
      notebookId: notebookId,
      title: title
    })
    .then((resp) => {
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


export const deleteNote = (token, notebookId, noteId) => {
  debugger
 return(dispatch) => {
   axios
   .delete(`http://localhost:3001/notebooks/${notebookId}/notes/${noteId}`, {
     headers: {token: token},
     notebookId: notebookId,
     noteId: noteId
   })
   .then((resp) => {
     debugger
     dispatch({
       type: 'DELETE_NOTE',
       note: resp.data
     })
   })
   .catch((errors) => {
     debugger
     console.log(errors)
   })
 }
}
