


export default function notebookReducer(state = {
  id: '',
  title: '',
  notes: []
}, action) {
  switch (action.type) {
    case "LOAD_NOTEBOOK":
    debugger
      return Object.assign({}, state, {
        id: action.notebook.id,
        title: action.notebook.title,
        notes: action.notebook.notes
      })
    default:
      return state
  }
}
