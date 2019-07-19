import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './css/changePlayerModal.css'

// component that appears to announce the end of the game
class EndGameModal extends Component {

    render() {
        const { player1Pts, player2Pts} = this.props;
        let player1Wins = player1Pts < player2Pts;
        const player1 = {name: localStorage.getItem('name1'), avatar: JSON.parse(localStorage.getItem('avatar1'))};
        const player2 = {name: localStorage.getItem('name2'), avatar: JSON.parse(localStorage.getItem('avatar2'))};

        return ( 
         <Link to = "/profile"><div className = "modal">
             <img className="hand-of-cards" src={player1Wins ? player1.avatar : player2.avatar} alt= "winning player avatar"/> 
            <div className="winner-header">Congratulations {player1Wins ? player1.name : player2.name}!</div>
            You won!
            <br />Click here to play again</div></Link>  
        )
  }
}

export default EndGameModal;
