import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote, boldText } from '../../actions/noteActions'
import Toolbar from '../Toolbar'
//import { NavLink } from 'react-router-dom'
//import '../../App.css';

class Note extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    // this.state = {
      //   body: this.props.notebook
	    // }
      this.handleOnChange = this.handleOnChange.bind(this)

	}

  handleOnChange(){
    this.setState({
      body: this.props.note.body
    })
  }

  handleOnClick(){

  }
	render(){
    let object = this.props.note.body

		return(
			<div>
				<Toolbar state={this.state}/>
				<div
          id="note"
          className="description"
          contentEditable="true"
          onChange={this.handleOnChange}
          dangerouslySetInnerHTML={{__html:object}} >
        </div>
        <button onClick={this.handleOnClick}>Save</button>
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
