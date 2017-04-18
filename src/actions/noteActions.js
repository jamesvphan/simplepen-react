export function addNote(state){
  return {
    type: "ADD_NOTE",
    notebook: {
      title: state.title,
      body: state.body
    }
  }
}
