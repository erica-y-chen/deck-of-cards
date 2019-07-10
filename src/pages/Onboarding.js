import React, { Component } from "react";
import axios from 'axios';
import CardDeck from '../components/CardDeck.js'
import {Clover, Diamond, Spades, Hearts} from '../components/CardDeckModern'
import ChangePlayerModal from "../components/ChangePlayerModal.js";
import './onboarding.css'
import 'aos/dist/aos.css';

import AOS from 'aos'

class Onboarding extends Component {
 

  render () {
    AOS.init();
    
    return (
      <div>
        <div className="onboarding-header" data-aos="zoom-out-up">
            <div className="onboarding-intro">Welcome to High-Low!</div>
            <div className="game-description">a simple and fun game for two that will keep you guessing</div>
        </div>
      </div>
    );
  }
}

export default Onboarding;
