import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote, boldText } from '../../actions/noteActions'
import Toolbar from '../Toolbar'
import { NavLink } from 'react-router-dom'
//import '../../App.css';

class Note extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    // this.state = {
      //   body: this.props.notebook
	    // }
	}
	render(){
    let object = this.props.note.body

		return(
			<div>
				<Toolbar state={this.state}/>
				<div dangerouslySetInnerHTML={{__html:object}} contentEditable="true" className="description" id="note">
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

export default connect(mapStateToProps, mapDispatchToProps)(Note)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNote: addNote,
    boldText: boldText
  }, dispatch)
}

function mapStateToProps(state) {
  return {note: state.noteReducer}
}
