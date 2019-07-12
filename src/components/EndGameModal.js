import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './css/changePlayerModal.css'

// component that appears to announce the end of the game
class EndGameModal extends Component {

    render() {
        const { player1Pts, player2Pts, player1, player2 } = this.props;
        let player1Wins = player1Pts < player2Pts;

        return ( 
         this.props.show ? <Link to = "/profile"><div className = "modal">
             <img className="hand-of-cards" src={player1Wins ? player1.avatar : player2.avatar} alt= "winning player avatar"/> 
            <div className="winner-header">Congratulations {player1Wins ? player1.name : player2.name}!</div>
            You won!
            <br />Click here to play again</div></Link> : null 
        )
  }
}

export default EndGameModal;
