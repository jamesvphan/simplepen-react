import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote } from '../actions/noteActions'
import Toolbar from './Toolbar'

class AddNote extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    this.state = {

	    }
	}
	render(){
		return(
			<div>
				<Toolbar/>
				<div contentEditable="true" className="description">
					<h1>About SimplePen</h1>
					<p>Simplepen is a clean and simple writing zone, to get you into that zone, where you can focus on the writing.
					<br/><br/>SimplePen is open source on.
					<br/><br/>If you have any questions, hit me up via.</p>
				</div>
				
				<div contentEditable="true" className="saveoverlay">
					<h1>Select save format</h1>
					<p className='saveselection'>
						<span data-format='markdown'>Markdown</span>
						<span data-format='html'>HTML</span>
						<span data-format='plain'>Plain Text</span>
					</p>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNote: addNote}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
