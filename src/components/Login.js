import React, {Component} from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Route, Redirect, Switch} from 'react-router-dom'
import { setToken, addUser, login, setUser } from '../actions/actions'

class Login extends Component{
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			password: "",
			token: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
	}

	handleSubmit(ev){
		ev.preventDefault()
		this.props.login(this.state)
	}

	handleOnChange(ev){
		let name = ev.target.name
		this.setState({
			[name]: ev.target.value
		})
	}

	componentWillMount() {
		console.log(this.props.token);
		if (window.localStorage.getItem('token')) {
			this.props.setUser(this.props.token)
		}
	}
	render(){
		return(
			<div>
				    {(!!this.props.token) ? this.props.history.push('/notebooks') :

					<div className="wrapper">
						<h1 className="logo">SimplePen  <span className="glyphicon glyphicon-pencil"></span></h1><br></br>
						<form className="form-signin" onSubmit={this.handleSubmit}>
							<input type="text" onChange={this.handleOnChange}  className="form-control" name="username" placeholder="Username" required="" autoFocus=""/> <br></br>
							<input type="password" onChange={this.handleOnChange} className="form-control" name="password" placeholder="Password" required=""/> <br></br>

					<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
				</form>
			</div>
		}
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

function mapStateToProps(state) {
  return {
		values: state.values,
		token: state.session.token
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
