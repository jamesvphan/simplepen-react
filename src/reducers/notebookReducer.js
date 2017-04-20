

export default function notebookReducer(state = {
  account: {
    notebooks: []
}}, action) {
  switch (action.type) {
    case "ADD_NOTEBOOK":
    debugger
      return Object.assign(state, {
        notebooks: state.account.notebooks.concat(action.notebook)
      })
    default:
      return state
  }
}
