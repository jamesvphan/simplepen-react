import React, {Component} from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken, addUser, login, setUser } from '../actions/actions'

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
			<div className="wrapper">
				<h1 className="logo">SimplePen  <span className="glyphicon glyphicon-pencil"></span></h1><br></br>
				<form className="form-signin" onSubmit={this.handleSubmit}>
					Username:<input type="text" className="form-control" onChange={this.handleOnChange} name="username" /> <br/>
					Email:<input type="email" className="form-control"  onChange={this.handleOnChange} name="email" /> <br/>
					Password:<input type="password" className="form-control"  onChange={this.handleOnChange} name="password" /> <br/>
					Confirm Password:<input type="password" className="form-control" onChange={this.handleOnChange} name="password_confirmation" /> <br/>
				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
				</form>
			</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setToken: setToken,
    register: addUser,
    login: login,
    setUser: setUser
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
