import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote, boldText, loadNote, deleteNote } from '../../actions/actions'
import Toolbar from '../Toolbar'

class Note extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    this.state = {
        currentNote: null
	    }
      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)

	}



  componentWillMount() {
    debugger
    let note_id = this.props.match.params.noteid
    let notebook_id = this.props.match.params.notebookid
    if (note_id) {
      this.setState({
        currentNode: note_id
      })
    }
    this.props.loadNote(this.props.token, notebook_id, note_id)
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
    debugger
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNote: addNote,
    boldText: boldText,
    loadNote: loadNote,
    deleteNote: deleteNote
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    currentNote: state.note
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
