import axios from 'axios'

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
