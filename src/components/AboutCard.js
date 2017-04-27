import React, { Component } from 'react'
import '../App.css'
import '../../public/font-awesome/css/font-awesome.min.css'

class AboutCard extends Component {

  handleOnClick(ev) {
    let growDiv = ev.target.nextSibling
    growDiv.id === "grow" ? growDiv.id = "grow-active" : growDiv.id = "grow"
    let spanDiv = ev.target.nextSibling.firstChild
    spanDiv.id === "test" ? spanDiv.id = "test-active" : spanDiv.id = "test"
  }

  render(){
    return(
      <div className="col-sm-4">
        <img
          className="image-about" src={this.props.image}
          onClick={(ev) => this.handleOnClick(ev)}
        />
        <div id="grow">
          <div className="fake-text" style={{fontFamily:"Didot"}}>{this.props.personName}</div>
          <div className="fake-text">
            {this.props.description}
          </div>
          <a className="icon" href={this.props.github} target="_blank">
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a className="icon" href={this.props.linkedin} target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
  
    )
  }
}


export default AboutCard
