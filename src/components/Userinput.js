import React, {Component} from 'react'
import axios from 'axios'

export default class Register extends Component{
	constructor() {
		super()
		this.state = {
			values: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}	

	handleSubmit(ev){
		ev.preventDefault()

		axios.post('http://localhost:3001/users',
			{ user: {username: this.state.values.username, email: this.state.values.email, password: this.state.values.password }
		})
		.then(resp => {
			// this.props.setToken(resp.data.jwt)
			console.log("It worked?")
			// localStorage.setItem('token', resp.data.token);
				debugger
		})
		.catch(resp => {
			debugger
		})
	}
	
	handleChange(ev){

		let newValues = this.state.values
		newValues[ev.target.name] = ev.target.value
		this.setState({
			values: newValues
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} name="username" />
					<input type="email" onChange={this.handleChange} name="email" />
					<input type="password" onChange={this.handleChange} name="password" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}