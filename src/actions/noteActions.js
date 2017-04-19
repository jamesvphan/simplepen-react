export function addNote(state){
  return {
    type: "ADD_NOTE",
    notebook: {
      title: state.title,
      body: state.body
    }
  }
}

export function boldText(state){
  return {
    type: "BOLD_TEXT",
    updatedNote: state.update
  }
}

export function italicsText(state){
  return {
    type: "ITALICS_TEXT",
    updatedNote: state.update
  }
}
