import React, {Component} from 'react'
import '../App.css'
import '../../public/font-awesome/css/font-awesome.min.css'
import AboutCard from './AboutCard'

class About extends Component {


  render() {
    return(
      <div className="container">

          <span id="title">SimplePen</span><br/>
        <div className='flip-container'>
          <AboutCard personName="James Phan" image="../../images/james.jpg"/>
        </div>
        <div className='flip-container'>
          <AboutCard personName="Vicky Rathsmill" image="../../images/vicky.jpg"/>
        </div>
        <div className='flip-container'>
          <AboutCard personName="Zayne Abraham"/>
        </div>
      </div>
    )
  }
}


export default About
