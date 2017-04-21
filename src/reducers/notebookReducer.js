

export default function notebookReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NOTEBOOK":
    debugger
      return [...state, action.notebook]
    default:
      return state
  }
}
