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
	    this.state = {
        title: ''
	    }
      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)

	}

  handleOnChange(){
    this.setState({
      body: this.props.note.body
    })
  }

  handleTitleChange(ev){
    let name = ev.target.name
    this.setState({
      [name]: ev.target.value
    })
  }

  handleOnClick(){

  }
	render(){
    let object = this.props.note.body

		return(
			<div>
        <input type="text" value={this.state.title} name="title" id="title" onChange={this.handleTitleChange} />
				<Toolbar state={this.state}/>
				<div
          id="note"
          className="description"
          contentEditable="true"
          onChange={this.handleOnChange}
          dangerouslySetInnerHTML={{__html:object}} >
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
