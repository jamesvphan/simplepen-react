const defaultbody = "<h1>This is a header.</h1><p>This a paragraph. You can take notes here and then save them to your notebook. So i guess it's like a diary or something.</p><p>But it's on the interwebs. So it's cooler than that. So yeah.</p>"
export default function noteReducer(state = {
  id: '',
  title: '',
  body: "",
  notebook_id: ''
}, action) {
  switch(action.type) {
    case 'LOAD_NOTE':
    var test = action.note.body || defaultbody
    return Object.assign({}, state, {
      id: action.note.id,
      title: action.note.title,
      body: test,
      notebook_id: action.note.notebook_id
    })

    default:
    return state
  }
}
