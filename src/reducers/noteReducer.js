
export default function noteReducer(state = {
  title: '',
  body: "<h1>This is a header tag.</h1><p>This is a paragraph.</p>"
}, action) {
  switch (action.type) {
    case "BOLD_TEXT":
      //do the actual bolding
      //debugger
      return Object.assign({}, state, {body: action.updatedNote})
    default:
      return state
  }
}
