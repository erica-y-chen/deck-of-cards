import React, { Component } from "react";
import './onboarding.css'

import { Link } from 'react-router-dom'

//images
import Logo from '../images/high-low-logo.svg'
import step1 from '../images/draw-card.svg'
import step2 from '../images/next-card.svg'
import step3 from '../images/card-is-drawn.svg'
import step4 from '../images/poker.svg'
import points from '../images/hand.svg'


//components
import Instructions from '../components/Instructions'

class Onboarding extends Component {
 

  render () {
    
    return (
      <div>
        <div className="onboarding-header">
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} alt = "high-low game logo"/>
                <div className="game-title">high/low</div>
                <div className="game-description">a fun and simple card game for two that will keep you guessing</div>
            </div>
            <Link to="/profile"><button className="get-started-header">Play</button></Link>
        </div>

        <div className="header">Instructions</div>
        <section className="instructions">
            <Instructions title="Step 1" stepImg = {step1} description = "A card is drawn at the beginning of your turn."/>
            <Instructions title="Step 2" stepImg = {step2} description = "Guess if the next card drawn is going to be higher or lower than the current card"/>
            <Instructions title="Step 3" stepImg = {step3} description = "Once you've guessed if it will be higher or lower, draw the next card"/>
            <Instructions title="Step 4" stepImg = {step4} description = "If you're wrong, the turn goes over to the second player. If you're right, you have the chance to guess again"/>
        </section>

        <div className="header">How to Win</div>
        <Instructions title="Points" stepImg={points} description = "Whenever you guess a higher/lower value correctly, the current card is added to your pile. If you make 3 correct guesses in a row, you can elect to pass their turn to the other player. however, if you guess incorrectly, you will get a point for every card in your pile at that time (i.e 3 cards = 3 points). The game is then turned over to the other player and the pile of drawn cards is then cleared. The game continues until all of the cards in the deck have been drawn and the player with the least number of points at the end wins."/>

        <Link to="/profile"><button className="get-started">Play</button></Link>
      </div>
    );
  }
}

export default Onboarding;
