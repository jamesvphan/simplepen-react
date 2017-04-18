
export function addNotebook(state){
  debugger
  return {
    type: "ADD_NOTEBOOK",
    title: state.title,
    description: state.description
  }
}
