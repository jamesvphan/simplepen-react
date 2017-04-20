import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToolbar } from '../actions/toolbarAction'
import { boldText } from '../actions/noteActions'
import { italicsText } from '../actions/noteActions'

class Toolbar extends Component {
	constructor() {
  	super()
    this.state = {

    }

    this.handleOnBold = this.handleOnBold.bind(this)
    this.handleOnItalics = this.handleOnItalics.bind(this)

	}

	returnValue(test){
		return {__html:test}
	}


  handleOnBold(){
    let highlightedText = window.getSelection().toString()
		let addBold = `<b>${highlightedText}</b>`

		var sel, range;
		if (window.getSelection) {
			sel = window.getSelection();
			console.log(sel)
			if (sel.rangeCount) {
				range = sel.getRangeAt(0);
				range.deleteContents();

				range.insertNode(document.createTextNode(`<b>${highlightedText}</b>`));
			}
		}
		let els = document.getElementById("note").innerHTML //.children

		let test = els.search("<b>")

		let newThing
		if (test === -1 ){
			newThing = els.replace(/&lt;b&gt;/g , "<b>").replace('&lt;/b&gt;', '</b>')
		} else {
			newThing = els.replace('<b>&lt;b&gt;', '').replace('&lt;/b&gt;</b>', '')
		}
		this.props.boldText({update: newThing})

  }

	handleOnItalics(){
	  let highlightedText = window.getSelection().toString()
	  let addItalics = `<em>${highlightedText}</em>`

	  var sel, range;
	  if (window.getSelection) {
	    sel = window.getSelection();
	    console.log(sel)
	    if (sel.rangeCount) {
	      range = sel.getRangeAt(0);
	      range.deleteContents();

	      range.insertNode(document.createTextNode(`<em>${highlightedText}</em>`));

	    }
	  }
	  let els = document.getElementById("note").innerHTML //.children
		console.log(els);
	  let test = els.search("<em>")

	  let newThing
	  if (test === -1 ){
	    newThing = els.replace('&lt;em&gt;' , "<em>").replace('&lt;/em&gt;', '</em>')
	  } else {
	    newThing = els.replace('<em>&lt;em&gt;', '').replace('&lt;/em&gt;</em>', '')
	  }
	  this.props.italicsText({update: newThing})

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
  return bindActionCreators({
		boldText: boldText,
		italicsText: italicsText,
	}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
