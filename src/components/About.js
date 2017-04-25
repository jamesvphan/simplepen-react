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
          <AboutCard
            personName="James Phan"
            image="../../images/james.jpg"
            github="https://github.com/jamesvphan"
            linkedin="https://www.linkedin.com/in/jamesvophan/"
          />
        </div>
        <div className='flip-container'>
          <AboutCard
            personName="Vicky Rathsmill"
            image="../../images/vicky.jpg"
            github='https://github.com/vrathsmill'
            linkedin='https://www.linkedin.com/in/victoria-rathsmill-5b954293/'
          />
        </div>
        <div className='flip-container'>
          <AboutCard
            personName="Zayne Abraham"
            image='../../images/zayne.png'
            github='https://github.com/yellowpad'
            linkedin='https://www.linkedin.com/in/zayne-abraham-68652779/'
          />
        </div>
      </div>
    )
  }
}


export default About
