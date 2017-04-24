import React, { Component } from 'react'
import '../App.css'
import '../../public/font-awesome/css/font-awesome.min.css'

class AboutCard extends Component {



  render(){
    return(
      <div className="flipper">
        <div className="front about">
          <img className="image-about" src={this.props.image} alt=""/> <br/>
          <div id="personName">{this.props.personName}</div>
        </div>
        <div className="back about">
          <span>Check Us Out</span> <br/>
          <a className="icon" href="https://github.com/jamesvphan">
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/jamesvophan/">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}


export default AboutCard
