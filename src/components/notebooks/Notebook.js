import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNotebook } from '../../actions/Account'
import Note from '../notes/Note'
import NotePreview from '../notes/NotePreview'

class Notebook extends Component {
  constructor(props){
    super(props)

    this.state = {
      showNotebook: null
    }

    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  componentWillMount() {
    debugger
    let notebook_id = this.props.match.params.notebookid
    if (notebook_id) {
      this.setState({
        showNotebook: notebook_id
      })
    }
    this.props.loadNotebook(this.props.token, notebook_id)
  }


  handleAddNote(){
    this.props.history.push('/notes')
  }

  handleOnClick(ev) {
    let note_id = ev.target.dataset.noteId
    this.props.history.push(`/notebooks/${this.state.showNotebook}/notes/${note_id}`)
  }

  render(){
    const notebookPreview = (
      <div>
        <button onClick={this.handleAddNote}>Add a note</button>
        <a href="#" data-notebookid={this.props.id} onClick={this.props.onClick}>{this.props.title}</a>
      </div>
    )
    const notesPreview = this.props.currentNotebook.notes.map((note, index) => {
      return <NotePreview
        title={note.title}
        key={index}
        id={note.id}
        onClick={this.handleOnClick}
      />
    })
    debugger
    return (
      <div>
        {this.state.showNotebook ? notesPreview : notebookPreview}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    currentNotebook: state.notebook
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadNotebook: loadNotebook
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook)
