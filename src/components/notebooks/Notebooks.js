import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notebook from './Notebook'
import NotebookForm from './NotebookForm'
import { setUser, deleteNotebook, logout } from '../../actions/actions'

class Notebooks extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleDeleteNotebook = this.handleDeleteNotebook.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  handleOnClick(ev) {
    ev.preventDefault()
    let notebook_id = ev.target.dataset.notebookid
    this.props.history.push(`/notebooks/${notebook_id}/notes`)
  }


  handleDeleteNotebook(ev){
    ev.preventDefault()
    let notebookId = ev.target.dataset.notebookid
    this.props.deleteNotebook(this.props.token, notebookId)
  }

  logOut(){
    this.props.logout()
    this.props.history.push('/')
}

  render(){
    const notebooks = this.props.notebooks.map((notebook, index) => {
      return <Notebook title={notebook.title} key={index} id={notebook.id} onClick={this.handleOnClick} onDeleteNotebook={this.handleDeleteNotebook}/>
    })
    return (
      <div>
        <button onClick={this.logOut} className="btn btn-info logout-btn"><span className= "glyphicon glyphicon-log-out" >Logout</span></button>
        <NotebookForm />
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
    deleteNotebook: deleteNotebook,
    logout: logout
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Notebooks)
