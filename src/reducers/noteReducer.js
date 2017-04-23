
export default function noteReducer(state = {
  id: '',
  title: '',
  body: '',
  notebook_id: ''
}, action) {
  switch(action.type) {
    case 'LOAD_NOTE':
    return Object.assign({}, state, {
      id: action.note.id,
      title: action.note.title,
      body: action.note.body,
      notebook_id: action.note.notebook_id
    })

    default:
    return state
  }
}
