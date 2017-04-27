import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// // import { addToolbar } from '../actions/toolbarAction'
// import { boldText } from '../actions/noteActions'
// import { italicsText } from '../actions/noteActions'
import { Link, Redirect } from 'react-router-dom'
import { saveNote, deleteNote } from '../actions/actions'

class Toolbar extends Component {
	constructor() {
  	super()
    this.state = {
    	nightMode : false,
    	setFont : 'Lora',
			redirect: false
    }

    	this.handleOnBold = this.handleOnBold.bind(this)
    	this.handleOnItalics = this.handleOnItalics.bind(this)
			this.handleSave = this.handleSave.bind(this)
			this.handleNightMode = this.handleNightMode.bind(this)
			this.handleFullScreen = this.handleFullScreen.bind(this)
			this.showFontBox = this.showFontBox.bind(this)
			this.showLinkBox = this.showLinkBox.bind(this)
			this.handleDeleteNote = this.handleDeleteNote.bind(this)
			this.userLink = this.userLink.bind(this)
	}

	returnValue(test){
		return {__html:test}
	}

	handleSave(){
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

		handleDeleteNote(){
			let notebookId = this.props.currentNote.notebook_id
			let noteId = this.props.currentNote.id
			this.props.deleteNote(this.props.token, notebookId, noteId)
				this.setState({
					redirect: true
				}
			)
		}


  	handleOnBold(){
		document.execCommand("bold", false, '')
  	}

  	handleNightMode(){
  		console.log(this.state)
  		let newNightMode = !this.state.nightMode
  		this.setState({
  			nightMode: newNightMode
  		})
  		if (newNightMode === true) {
   			document.body.style.background = '#000';
   			document.body.style.setProperty ("background-color", "black", "important");
   			document.body.style.color = 'white';
   			document.body.style.transition = 'ease-in-out 0.4s';
  		}
  		else{
  	   		document.body.style.background = 'white';
   			document.body.style.setProperty ("background-color", "white", "important");
   			document.body.style.color = 'black';
   			document.body.style.transition = 'ease-in-out 0.4s';
  		}

  	}

	handleOnItalics(){
		document.execCommand("italic", false, '')
	}

	changeFont(ev){
		this.setState({
			setFont: ev.target.value
		})
		console.log(this.state.setFont)
		document.execCommand('fontName', false, this.state.setFont)
		document.querySelector(".setFont").style.display = 'none';
		document.querySelector(".fontContainer").style.display = 'none';
	}


	handleFullScreen(){
		var elem = document.body; // Make the body go full screen.
		this.requestFullScreen(elem);
	}

	requestFullScreen(element) {
		var doc = window.document;
		var docEl = doc.documentElement;

		var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl);
		}
		else {
			cancelFullScreen.call(doc);
		}
	}

	showFontBox(){
		document.querySelector(".setFont").style.display = 'block';
		document.querySelector(".fontContainer").style.display = 'block';
	}

	showLinkBox(){
		console.log("test")
		document.querySelector(".setLink").style.display = 'block';
		document.querySelector(".linkContainer").style.display = 'block';
	}

	userLink(notebookId){
		return `/notebooks/${notebookId}/notes`
	}

	render(){
		return(
			<div>
				  {this.state.redirect ? <Redirect to={this.userLink(this.props.currentNotebook.id)} /> : false}
				<div className="ui">
	        		<div className="wrapper">
	  					<div className="top editing">
	  						<button onClick={this.handleFullScreen} className="fullscreen useicons" title="Toggle fullscreen">
	              				<span className="glyphicon glyphicon-fullscreen"></span>
	            			</button>

	  						<button className="target useicons" title="Set target word count" onClick={this.handleNightMode}>
	              				<span className="glyphicon glyphicon-adjust"></span>
	            			</button>

	            			<button onClick={this.showLinkBox} className="fullscreen useicons" title="Toggle fullscreen">
	             	 			<span className="glyphicon glyphicon-link"></span>
	            			</button>

	  						<button className="color-flip useicons" title="Invert colors" onClick={this.handleOnBold}>
	              				<span className="glyphicon glyphicon-bold"></span>
	            			</button>

	  						<button className="target useicons" title="Set target word count" onClick={this.handleOnItalics}>
	              				<span className="glyphicon glyphicon-italic"></span>
	            			</button>

	  						<button onClick={this.showFontBox} className="save useicons" title="Save Text">
	             			 	<span className="glyphicon glyphicon-font"></span>
	            			</button>

	  						<button onClick={this.handleSave} className="save useicons" title="Save Text">
	             			 	<span className="glyphicon glyphicon-floppy-disk"></span>
	            			</button>

								<button onClick={this.handleDeleteNote} className="save useicons" title="Save Text">
									// <Link to={this.userLink(this.props.currentNotebook.id)} />
										<span className="glyphicon glyphicon-remove"></span>
									</button>
	  					</div>

		  				<div className="bottom">
		  					<button className="about">?</button>
		  				</div>
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
		deleteNote: deleteNote
	}, dispatch)
}

function mapStateToProps(state) {
  return {
		token: state.session.token,
		currentNotebook: state.notebook,
		currentNote: state.note
	}
}
