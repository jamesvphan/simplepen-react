

export default function notebook(state = {
  notebooks: []
}, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return Object.assign(state, {
        notebooks: state.notebooks.concat(action.notebook)
      })
    default:
      return state
  }
}
