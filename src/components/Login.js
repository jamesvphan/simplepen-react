import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken } from '../actions/Account.js'

class Register extends Component{
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			password: "",
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}

	handleSubmit(ev){
		ev.preventDefault()
		debugger
		axios.post('http://localhost:3001/sessions',
			{ user: {username: this.state.username, password: this.state.password }
		})
		.then(resp => {

			window.localStorage.setItem('token',resp.data.jwt)

			debugger
		})
		.catch(resp => {
			debugger
		})
	}

	handleOnChange(ev){
		let name = ev.target.name
		this.setState({
			[name]: ev.target.value
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					Username:<input type="text" onChange={this.handleOnChange} name="username" /> <br/>
					Password:<input type="password" onChange={this.handleOnChange} name="password" /> <br/>
					<input type="submit" value="Log In"/>
				</form>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setToken: setToken}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
