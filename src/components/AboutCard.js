import React, { Component } from 'react'
import '../App.css'
import '../../public/font-awesome/css/font-awesome.min.css'

class AboutCard extends Component {

  handleOnClick(ev) {
    let growDiv = ev.target.nextSibling
    // debugger
    growDiv.id === "grow" ? growDiv.id = "grow-active" : growDiv.id = "grow"
// debugger
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
          <i className="fa fa-github fa-3x" aria-hidden="true"></i>
        </div>
      </div>
      // <div className={this.props.container}>
      //   <div className="flipper">
      //     <div className="front about">
      //       <img className="image-about" src={this.props.image} alt=""/> <br/>
      //       <div id="personName">{this.props.personName}</div>
      //     </div>
      //     <div className="back about">
            // <span>Check Us Out</span> <br/>
            // <a className="icon" href={this.props.github}>
            //   <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            // </a>
            // <a className="icon" href={this.props.linkedin}>
            //   <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            // </a>
      //     </div>
      //   </div>
      // </div>
    )
  }
}


export default AboutCard
