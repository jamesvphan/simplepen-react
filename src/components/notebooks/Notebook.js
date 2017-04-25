import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNotebook, addNote, deleteNotebook, logout } from '../../actions/actions'
// import Note from '../notes/Note'
import NotePreview from '../notes/NotePreview'
import '../../test.css'

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
    let checkNotebookId = this.props.match
    let notebook_id
    if (checkNotebookId) {
      notebook_id = checkNotebookId.params.notebookid
      this.setState({
        showNotebook: notebook_id
      })
      this.props.loadNotebook(this.props.token, notebook_id)
    }
  }

  handleAddNote(ev){
    ev.preventDefault()
    let notebookId = ev.target.dataset.notebookid
    this.props.addNote(this.props.token, notebookId)
    let last = this.props.currentNotebook.notes.length - 1
    this.props.history.push(`/notebooks/${this.state.showNotebook}/notes/${this.props.currentNotebook.notes[last].id}`)
  }


  handleOnClick(ev) {
    let note_id = ev.target.dataset.noteId
    this.props.history.push(`/notebooks/${this.state.showNotebook}/notes/${note_id}`)
  }

  render(){
    const notebookPreview = (
      <div>
        <button data-notebookid={this.props.id}  onClick={this.handleAddNote}>Add a note</button>
        <div className="container-class">
          <div className="notebook">
            <div className="outer-post-it">
              <div className="note">
                {this.props.title}
              </div>

            </div>
            <div className="inner-post-its">
              <div className="red-post-it"></div>
            </div>
            <div className="holes">
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className="spiral">
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
            </div>
            <div
              className="brand"
              onClick={this.props.onDeleteNotebook}
              data-notebookid={this.props.id}
            >
              <div className="letter">X</div>
            </div>
            <a href=""
              data-notebookid={this.props.id}
              onClick={this.props.onClick}
              className="notebook-links"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    )

    const notesPreview = this.props.currentNotebook.notes.map((note, index) => {
      return <NotePreview
        title={note.title}
        body={note.body}
        key={index}
        id={note.id}
        onClick={this.handleOnClick}
      />
    })

    return (
      <div className="note-container-test">
        <button data-notebookid={this.props.currentNotebook.id}  onClick={this.handleAddNote}>Add a note</button>
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
    loadNotebook: loadNotebook,
    addNote: addNote,
    deleteNotebok: deleteNotebook,
    logout: logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebook)
