import React, { Component } from "react";
import './css/changePlayerModal.css'
import cards from '../images/hand.svg'
import axios from 'axios';


// this is the container for ALL of '/dashboard'
class ChangePlayerModal extends Component {



    render() {
        return ( 
         this.props.show ? <div className="modal-background"><div className = "modal" onClick = {this.props.triggerModal}>
             <img className="hand-of-cards" src={cards} /> 
             {this.props.correct >= 3 && this.props.passing ? "Turn passed" : "You're wrong!" } <br />Next player, click anywhere to begin your turn</div></div> : null 
        )
  }
}

export default ChangePlayerModal;
