import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote, boldText, loadNote } from '../../actions/actions'
import Toolbar from '../Toolbar'

class Note extends Component {
  	constructor() {
    	super()
     	// const token = window.localStorage.getItem("token")
	    // const config = { headers: { token: window.localStorage.getItem("token") } }
	    this.state = {
        currentNote: null,
        title: "This is a title",
        body: "",
        setFont : ''
	    }
      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)

	}

  componentWillMount() {

    let note_id = this.props.match.params.noteid
    let notebook_id = this.props.match.params.notebookid
    if (note_id) {
      this.setState({
        currentNode: note_id
      })
    }
    this.props.loadNote(this.props.token, notebook_id, note_id)
  }

  handleOnChange(e){
    e.preventDefault();
    this.setState({
      body: this.props.note.body
    })
  }

  handleTitleChange(ev){
    let name = ev.target.name
    this.setState({
      title: ev.target.value
    });
  }

  handleOnClick(){

  }

  changeFont(ev){
    // console.log(this.state.setFont)
    // console.log(ev.target.value)
    // this.setState({
    //   setFont: ev.target.value
    // })
    // console.log(this.state.setFont)
    document.execCommand('fontName', false, ev.target.value);
    document.querySelector(".setFont").style.display = 'none';
    document.querySelector(".fontContainer").style.display = 'none';
  }
  
  hideOverlay(){
    console.log("not hiding")
    document.querySelector(".fontContainer").style.display = 'none';   
  }

  
	render(){
    debugger
    console.log('note body: ' + this.props.note.body)
    let object = this.state.body

		return(
      <div>
        <div className="col-md-6 col-md-offset-3 mainwrap">
          <input type="text" className="remove" value={this.state.title} name="title" id="title" onChange={this.handleTitleChange} />
          <Toolbar note={this.state}/>
          <div
            id="note"
            className="description"
            contentEditable="true"
            onChange={this.handleOnChange}
            dangerouslySetInnerHTML={{__html:object}} >
          </div>
        </div>
        <div className="fontContainer">
          <div className="fontContainerInner">
            <select className="setFont" id="lang" onChange={this.changeFont} value={this.state.value}>
                <option className="pickLora" value="Lora">Lora</option>
                <option className="pickArial" value="Arial">Arial</option>
                <option className="pickRaleway" value="Raleway">Raleway</option>
                <option className="pickLeague" value="League Script">League Script</option>
            </select>
            <div><a onClick={this.hideOverlay}>Close</a></div>
          </div>
        </div>        
      </div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNote: addNote,
    boldText: boldText,
    loadNote: loadNote
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    currentNote: state.note
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
