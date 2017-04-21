import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNotebook, setUser } from '../../actions/Account'


class NotebookForm extends Component {
  constructor() {
    super()
    //const token = window.localStorage.getItem("token")
    // const config = { headers: { token: window.localStorage.getItem("token") } }

    this.state = {
      title: '',
      description: '',
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentWillMount() {
      debugger
      if (this.props.token) {
        this.props.setUser(this.props.token)
      }
    }
  handleOnSubmit(ev){
    ev.preventDefault()
    debugger
    this.props.addNotebook(this.props.token, this.state)
  }

  handleOnChange(ev){
    let name = ev.target.name
		this.setState({
			[name]: ev.target.value
		})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} name='title'/>
          <input type="text" onChange={this.handleOnChange} name='description'/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.session.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNotebook: addNotebook,
    setUser: setUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm)
