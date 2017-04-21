import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notebook from './Notebook'
import { setToken, addUser, login, setUser } from '../../actions/Account'

class Notebooks extends Component {
  constructor(props){
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(ev) {
    debugger
    let notebook_id = ev.target.dataset.notebookid
    this.props.history.push(`/notebook/${notebook_id}`)
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.setUser(this.props.token)
    }
  }

  render(){
    const notebooks = this.props.notebooks.map((notebook, index) => {
      return <Notebook title={notebook.title} key={index} id={notebook.id} onClick={this.handleOnClick}/>
    })
    return (
      <div>
        {notebooks}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token,
    notebooks: state.account.notebooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUser: setUser
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Notebooks)
