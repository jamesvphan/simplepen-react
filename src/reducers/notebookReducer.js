

export default function notebookReducer(state = {
  title: '',
  description: ''
}, action) {
  switch (action.type) {
    case "ADD_NOTEBOOK":
    debugger
      return Object.assign(state, {
        notebooks: state.concat(action.notebook)
      })
    default:
      return state
  }
}
