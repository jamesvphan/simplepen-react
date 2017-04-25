import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNote } from '../../actions/actions'
import Toolbar from '../Toolbar'

class NotePreview extends Component {
  constructor() {
    super()

    this.state = {
      currentNote: null,
      title: '',
      body: '',
      setLink: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.hideOverlay = this.hideOverlay.bind(this)
    this.addLink = this.addLink.bind(this)
    this.changeLink = this.changeLink.bind(this)
    //this.handleTitleChange = this.handleTitleChange.bind(this)
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

  addLink(ev){
    ev.preventDefault();
    console.log("target: " + ev.target.value)
    document.execCommand("insertHTML", false, this.state.setLink);
    document.querySelector(".setLink").style.display = 'none';
    document.querySelector(".linkContainer").style.display = 'none';
    this.setState({
      setLink: ''
    })
  }

  changeLink(ev){

    this.setState({
      setLink: ev.target.value
    })
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


  handleOnChange(ev){
    let name = ev.target.name
    this.setState({
      [name]: ev.target.value
    })
  }

  render() {

    let object = this.props.currentNote.body
    let title = this.props.currentNote.title

    const allNotesPreview = (
      <div>
        <a href="" data-note-id={this.props.id} onClick={this.props.onClick}>{this.props.id}{this.props.title}</a>
      </div>
    )

    const actualNote = (
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
            <div>
              <a onClick={this.hideOverlay}>Close</a>
            </div>
          </div>
        </div>
        <div className="linkContainer">
          <div className="linkContainerInner">
            <form onSubmit={this.addLink}>
              <input placeholder="Add Link" type="text" className="setLink" id="lang" onChange={this.changeLink} value={this.state.setLink} />
              <input type="submit" value="Submit" />
            </form>
            <div>
              <a onClick={this.hideLinkBox}>Close</a>
            </div>
          </div>
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
