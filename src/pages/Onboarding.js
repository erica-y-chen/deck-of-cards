import React, { Component } from "react";
import './onboarding.css'
import 'aos/dist/aos.css';

//libraries
import AOS from 'aos'

//images
import Logo from '../images/high-low-logo.svg'
import step1 from '../images/draw-card.svg'
import step2 from '../images/next-card.svg'
import step3 from '../images/card-is-drawn.svg'
import step4 from '../images/poker.svg'


//components
import Instructions from '../components/Instructions'

class Onboarding extends Component {
 

  render () {
    AOS.init();
    
    return (
      <div>
        <div className="onboarding-header" data-aos="zoom-out-up" data-aos-duration="1200">
            <div className = "high-low-logo">
                <div className="onboarding-intro">Welcome to</div>
                <img className="logo" src ={Logo} />
                <div className="game-title">high-low</div>
            </div>
            <div className="game-description">a simple and fun card game for two that will keep you guessing</div>
        </div>

        <section className="instructions">
            <Instructions title="1." stepImg = {step1} description = "A card is drawn at the beginning of your turn."/>
            <Instructions title="2." stepImg = {step2}/>
            <Instructions title="3." stepImg = {step3}/>
            <Instructions title="4." stepImg = {step4}/>
        </section>
      </div>
    );
  }
}

export default Onboarding;
