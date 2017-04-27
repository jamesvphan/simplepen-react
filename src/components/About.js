import React, {Component} from 'react'
import '../about.css'
import '../../public/font-awesome/css/font-awesome.min.css'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'

class About extends Component {

  render() {
    return(
      <div className="container">
        <Link to='/notebooks'><span id="title">SimplePen</span></Link>
        <h4>A minimalist writing zone to focus your thoughts. Built with Ruby on Rails and React-Redux. Check our profile for more!</h4>
        <br />
        <AboutCard
          description="A bona fide tech enthusiast, coder, and elephant lover. A front-end whiz, with endless back-end possibilities."
          personName="James Phan"
          image="../../images/james.jpg"
          github="https://github.com/jamesvphan"
          linkedin="https://www.linkedin.com/in/jamesvophan/"
        />
        <AboutCard
          description="A former English major and communications and marketing specialist, I am so excited to begin a new career in web development."
          personName="Vicky Rathsmill"
          image="../../images/vicky.jpg"
          github='https://github.com/vrathsmill'
          linkedin='https://www.linkedin.com/in/victoria-rathsmill/'
        />
        <AboutCard
          description="Builds things with rails and javascript"
          personName="Zayne Abraham"
          image='../../images/zayne.png'
          github='https://github.com/yellowpad'
          linkedin='https://www.linkedin.com/in/zayne-abraham-68652779/'
        />
      </div>
    )
  }
}


export default About
