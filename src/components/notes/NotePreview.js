import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NotePreview extends Component {
  constructor() {
    super()
  }


  render() {
    return(
      <div>
        <a href="#" data-note-id={this.props.id} onClick={this.props.onClick}>{this.props.title}</a>
      </div>
    )
  }
}

export default NotePreview
