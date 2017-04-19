

export default function notebookReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NOTEBOOK":
      return Object.assign(state, {
        notebooks: state.notebooks.concat(action.notebook)
      })
    default:
      return state
  }
}
