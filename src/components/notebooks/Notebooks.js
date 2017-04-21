import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notebook from './Notebook'

export default class Notebooks extends Component {
  constructor(props){
    super(props)


  }



  render(){
    const notebooks = this.props.account.notebooks.map((notebook, index) => {
      return <Notebook title={notebook.title} key={index} id={notebook.id}  />
    })
  return (
    <div>
    {notebooks}
    </div>
    )
  }
}
