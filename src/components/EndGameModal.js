import React, { Component } from "react";
import './css/changePlayerModal.css'
import cards from '../images/hand.svg'
import axios from 'axios';


// this is the container for ALL of '/dashboard'
class EndGameModal extends Component {



    render() {
        let player1Wins = this.props.player1Pts < this.props.player2Pts
        return ( 
         this.props.show ? <div className = "modal" onClick = {this.props.resetGame}>
             <img className="hand-of-cards" src={player1Wins ? this.props.player1.avatar : this.props.player2.avatar} /> 
            <div className="winner-header">Congratulations {player1Wins ? this.props.player1.name : this.props.player2.name}!</div>
            You won!
            <br />Click anywhere to play again</div> : null 
        )
  }
}

export default EndGameModal;
