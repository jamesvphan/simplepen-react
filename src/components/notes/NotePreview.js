import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNote } from '../../actions/actions'
import Toolbar from '../Toolbar'
import '../../App.css'

class NotePreview extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: null,
      title: '',
      body: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)
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
      <div id="note" onClick={this.props.onClick} data-note-id={this.props.id}>
        <div className="lines">
        	<span className="horizontal" data-note-id={this.props.id}>
        		<span></span><span></span><span></span>
        		<span></span><span></span><span></span>
        		<span></span>
        	</span>
        	<span className="vertical">
        		<span></span><span></span>
        	</span>
        </div>
        <div className="sticky" >
          <div className="inner">
            <span className="scratch"></span>
            <div className="paper" >
              <p>
              	{this.props.title}
              </p>
            </div>
          </div>
        </div>
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
