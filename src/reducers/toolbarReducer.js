
export default function toolbarReducer(state = {
  title: '',
  body: "<h1>This is a header tag.</h1><p>This is a paragraph.</p>"
}, action) {
  switch (action.type) {
    case "BOLD_TEXT":
      return Object.assign({}, state, {body: action.updatedNote})

      case "ITALICS_TEXT":
        return Object.assign({}, state, {body: action.updatedNote})

    default:
      return state
  }
}
