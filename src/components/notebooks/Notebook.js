import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Notebook extends Component {
  constructor(){
    super()

    this.handleAddNote = this.handleAddNote.bind(this)
  }

  handleAddNote(){
    this.props.history.push('/notes')
  }

  render(){
  return (
    <div>

    <button onClick={this.handleAddNote}>Add a note</button>

    </div>
  )
  }
}
