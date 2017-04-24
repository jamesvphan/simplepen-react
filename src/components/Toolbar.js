import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// // import { addToolbar } from '../actions/toolbarAction'
// import { boldText } from '../actions/noteActions'
// import { italicsText } from '../actions/noteActions'
import { saveNote } from '../actions/actions'

class Toolbar extends Component {
	constructor() {
  	super()
    this.state = {
    }

    this.handleOnBold = this.handleOnBold.bind(this)
    this.handleOnItalics = this.handleOnItalics.bind(this)
		this.handleSave = this.handleSave.bind(this)

	}

	returnValue(test){
		return {__html:test}
	}

	handleSave(){
		debugger
		let notebookId = this.props.currentNote.notebook_id
		let noteId = this.props.currentNote.id
		let title = document.getElementById("title").innerText
		let note = document.getElementById("note").innerHTML
		let data = {
			title: title,
			note: note,
			notebookId: notebookId,
			noteId: noteId
		}
		this.props.saveNote(this.props.token, data)
	}

  handleOnBold(){
		document.execCommand("bold", false, '')
  }

	handleOnItalics(){
		document.execCommand("italic", false, '')
	}


	render(){
		return(
			<div className="ui">
        		<div className="wrapper">
  					<div className="top editing">
  						
  						<button className="fullscreen useicons" title="Toggle fullscreen">
             	 			<span className="glyphicon glyphicon-fullscreen"></span>
            			</button>

			            <button className="fullscreen useicons" title="Toggle fullscreen">
			              <span className="glyphicon glyphicon-link"></span>
			            </button>

  						<button className="color-flip useicons" title="Invert colors" onClick={this.handleOnBold}>
              				<span className="glyphicon glyphicon-bold"></span>
            			</button>

  						<button className="target useicons" title="Set target word count" onClick={this.handleOnItalics}>
              				<span className="glyphicon glyphicon-italic"></span>
           	 			</button>

  						<button onClick={this.handleSave} className="save useicons" title="Save Text">
              				<span className="glyphicon glyphicon-floppy-disk"></span>
            			</button>
  					</div>

	  				<div className="bottom">
	  					<button className="about">?</button>
	  				</div>
			  </div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
		// boldText: boldText,
		// italicsText: italicsText,
		saveNote: saveNote,
	}, dispatch)
}

function mapStateToProps(state) {
  return {
		token: state.session.token,
		currentNotebook: state.notebook,
		currentNote: state.note
	}
}
