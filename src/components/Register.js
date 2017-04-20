import React, {Component} from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken } from '../actions/Account.js'

class Register extends Component{
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			email: '',
			password: '',
			password_confirmation: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}

	handleSubmit(ev){
		ev.preventDefault()
		this.props.register(this.state)
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
					Email:<input type="email" onChange={this.handleOnChange} name="email" /> <br/>
					Password:<input type="password" onChange={this.handleOnChange} name="password" /> <br/>
					Confirm Password:<input type="password" onChange={this.handleOnChange} name="password_confirmation" /> <br/>
					<input type="submit" value="Sign Up"/>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
		setToken: setToken
	}, dispatch)
}

const mapStateToProps = (state) => {
  return {
		username: state.username,
		email: state.email,
		password: state.password,
		password_confirmation: state.password_confirmation
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
