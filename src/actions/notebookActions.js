
export function addNotebook(state){
  return {
    type: "ADD_NOTEBOOK",
    notebook: {
      title: state.title,
      description: state.description
    }
  }
}
