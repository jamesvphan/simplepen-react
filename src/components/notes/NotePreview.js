import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNote } from '../../actions/actions'
import Toolbar from '../Toolbar'

class NotePreview extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: null,
      title: '',
      body: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    //this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentWillMount() {
    debugger
    let checkNoteId = this.props.match
    let note_id
    if (checkNoteId) {
      note_id = checkNoteId.params.noteid
      let notebook_id = this.props.match.params.notebookid
      this.setState({
        currentNote: note_id
      })
      this.props.loadNote(this.props.token, notebook_id, note_id)
    }
  }

  handleOnChange(ev){
    let name = ev.target.name
    this.setState({
      [name]: ev.target.value
    })
  }

  render() {
    //debugger
    let object = this.props.currentNote.body
    let title = this.props.currentNote.title

    const allNotesPreview = (
      <div>
        <a href="" data-note-id={this.props.id} onClick={this.props.onClick}>{this.props.id}{this.props.title}</a>
      </div>
    )

    const actualNote = (
      <div>

        <div
          id="title"
          contentEditable="true"
          onChange={this.handleOnChange}
          dangerouslySetInnerHTML={{__html:title}}
        >
        </div>
				<Toolbar state={this.state}/>
				<div
          id="note"
          className="description"
          contentEditable="true"
          onChange={this.handleOnChange}
          dangerouslySetInnerHTML={{__html:object}}
        >
        </div>

			</div>
    )

    return (
      <div>
        {this.state.currentNote ? actualNote : allNotesPreview}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    currentNote: state.note
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadNote: loadNote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePreview)
