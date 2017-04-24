import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notebook from './Notebook'
import { setUser, deleteNotebook } from '../../actions/actions'

class Notebooks extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleDeleteNotebook = this.handleDeleteNotebook.bind(this)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  handleOnClick(ev) {
    debugger
    let notebook_id = ev.target.dataset.notebookid
    this.props.history.push(`/notebooks/${notebook_id}/notes`)
  }
  //
  // handleDeleteNote(ev){
  //   ev.preventDefault()
  //   debugger
  //   let notebookId = ev.target.dataset.notebookid
  //   this.props.deleteNote(this.props.token, notebookId)
  // }

  handleDeleteNotebook(ev){
    ev.preventDefault()
    debugger
    let notebookId = ev.target.dataset.notebookid
    this.props.deleteNotebook(this.props.token, notebookId)
  }

  render(){
    const notebooks = this.props.notebooks.map((notebook, index) => {
      return <Notebook title={notebook.title} key={index} id={notebook.id} onClick={this.handleOnClick} onDeleteNotebook={this.handleDeleteNotebook}/>
    })
    return (
      <div>
        {notebooks}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    notebooks: state.account.notebooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser: setUser,
    deleteNotebook: deleteNotebook
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Notebooks)
