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
	}
	render(){
		return(
			<div>
				<div className="options">
					<span className="no-overflow">
						<span className="lengthen ui-inputs">
							<button className="url useicons"></button>
							<input className="url-input" type="text"/>
							<button className="bold">b</button>
							<button className="italic">i</button>
							<button className="quote active">”</button>
						</span>
					</span>
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