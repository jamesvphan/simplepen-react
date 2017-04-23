
export default function noteReducer(state = {
  id: '',
  title: '',
  body: '',
}, action) {
  switch(action.type) {
    case 'LOAD_NOTE':
    return Object.assign({}, state, {
      id: action.note.id,
      title: action.note.title,
      body: action.note.body,
    })

    default:
    return state
  }
}
