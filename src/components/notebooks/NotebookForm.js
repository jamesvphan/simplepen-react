import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNotebook } from '../../actions/notebookActions'

class NotebookForm extends Component {
  constructor() {
    super()
     const token = window.localStorage.getItem("token")
    // const config = { headers: { token: window.localStorage.getItem("token") } }

    this.state = {
      title: '',
      description: '',
      token: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnSubmit(ev){
    ev.preventDefault()
    this.props.addNotebook(this.state)
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

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNotebook: addNotebook}, dispatch)
}

function mapStateToProps(state) {
  return {values: state.values}
}
