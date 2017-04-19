import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToolbar } from '../actions/toolbarAction'
import { boldText } from '../actions/noteActions'

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

	// function createMarkup() {
	//   return {__html: 'First &middot; Second'};
	// }
	//
	// function MyComponent() {
	//   return <div dangerouslySetInnerHTML={createMarkup()} />;
	// }

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
				// let testing = this.returnValue(highlightedText)
				// return this.returnValue(highlightedText)
				// let doc=document.createTextNode(<b dangerouslySetInnerHTML={{this.returnValue(highlightedText).__html}} />)
				range.insertNode(document.createTextNode(`<b>${highlightedText}</b>`));
			}
		}
		let els = document.getElementById("note").innerHTML //.children

		// Array.prototype.map.call(els, function(el){
		// 	console.log(el.outerHTML)
		// })
		// debugger		
		
		// let array = [... els]
		
		// debugger
		// let updatedMarkup = array.map((el) => {
		// 	console.log(el)
		// 	return el.outerHTML
		// })
		let test = els.search("<b>")
		console.log(test)
		// console.log("Markup: " + updatedMarkup.join(''))
		
		let newThing
		if (test === -1 ){
			// newThing = els.replace('&lt;b&gt;', '<b>').replace('&lt;/b&gt;', '</b>')
			newThing = els.replace(/&lt;b&gt;/g , "<b>").replace('&lt;/b&gt;', '</b>')
		} else {

			newThing = els.replace('<b>&lt;b&gt;', '').replace('&lt;/b&gt;</b>', '')

		}

		

		this.props.boldText({update: newThing})

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
  return bindActionCreators({
		boldText: boldText
	}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
