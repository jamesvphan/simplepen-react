import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNote } from '../../actions/actions'

class NotePreview extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: null
    }
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


  render() {
    const allNotesPreview = (
      <div>
        <a href="" data-note-id={this.props.id} onClick={this.props.onClick}>{this.props.title}</a>
      </div>
    )
    const actualNote = (
      <div>{this.note}</div>
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
