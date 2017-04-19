import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote } from '../actions/noteActions'
import Toolbar from './Toolbar'
import { Link } from 'react-router-dom'

class AddNote extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    this.state = {

	    }
	}
	render(){
    let object="<b>test</b>"

		return(
			<div>
				<Toolbar/>
				<div dangerouslySetInnerHTML={{__html:object}} contentEditable="true" className="description">

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
