import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNotebook, setUser } from '../../actions/actions'


class NotebookForm extends Component {
  constructor(props) {
    super(props)
    //const token = window.localStorage.getItem("token")
    // const config = { headers: { token: window.localStorage.getItem("token") } }

    this.state = {
      title: '',
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  handleOnSubmit(ev){
    ev.preventDefault()
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
          <div className="col-md-6 col-md-offset-3 notebook-form">
          <h3>{this.props.currentUser.username}'s Notebooks</h3><br/><input placeholder="New Notebook Title" type="text" className="custom-input" onChange={this.handleOnChange} name='title'/><br/>
          <input type="submit" className="btn btn-primary" value="Add Notebook"/>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    currentUser: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNotebook: addNotebook,
    setUser: setUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm)
