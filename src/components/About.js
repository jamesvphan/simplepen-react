import React, {Component} from 'react'
import '../about.css'
import '../../public/font-awesome/css/font-awesome.min.css'
import AboutCard from './AboutCard'

class About extends Component {

  render() {
    return(
      <div className="container">
        <span id="title">SimplePen</span>
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
          linkedin='https://www.linkedin.com/in/victoria-rathsmill-5b954293/'
        />
        <AboutCard
          description="I like big BUTTS and I cannot lie. Yas kween. Yas kween. Yas kween. YAS KWEEN!"
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
