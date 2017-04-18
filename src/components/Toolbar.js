import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToolbar } from '../actions/toolbarAction'

class Toolbar extends Component {
	constructor() {
  	super()
   	// const token = window.localStorage.getItem("token")
    // const config = { headers: { token: window.localStorage.getItem("token") } }
    this.state = {

    }

    this.handleOnBold = this.handleOnBold.bind(this)
    this.handleOnItalics = this.handleOnItalics.bind(this)

	}

  handleOnBold(){
    let highlightedText = window.getSelection().toString()
    debugger
  }

  handleOnItalics(){

  }
	render(){
		return(
			<div className="ui">
        <div className="wrapper">
  				<div className="top editing">
  					<button className="fullscreen useicons" title="Toggle fullscreen">
              <span className="glyphicon glyphicon-fullscreen"></span>
            </button>

            <button className="fullscreen useicons" title="Toggle fullscreen">
              <span className="glyphicon glyphicon-link"></span>
            </button>

  					<button className="color-flip useicons" title="Invert colors" onClick={this.handleOnBold}>
              <span className="glyphicon glyphicon-bold"></span>
            </button>

  					<button className="target useicons" title="Set target word count" onClick={this.handleOnItalics}>
              <span className="glyphicon glyphicon-italic"></span>
            </button>

  					<button className="save useicons" title="Save Text">
              <span className="glyphicon glyphicon-floppy-disk"></span>
            </button>
  				</div>

  				<div className="bottom">
  					<button className="about">?</button>
  				</div>
			  </div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({Toolbar: Toolbar}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
