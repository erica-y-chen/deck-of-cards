import React, { Component } from "react";
import './css/changePlayerModal.css'
import cards from '../images/hand.svg'

// component for a modal that appears when players switch turns
class ChangePlayerModal extends Component {

    render() {
        return ( 
         this.props.show ? <div className = "modal" onClick = {this.props.triggerModal}>
             <div data-testid = "modalText" className="modal-contents" >
            <img className="hand-of-cards" src={cards} alt="hand holding cards"/> 
            
            {/* if this is triggered by a player passing on his/her turn, it will display turn passed, otherwise it's triggered when there's an incorrect guess then it'll say you're wrong */}
             {this.props.correct >= 3 && this.props.passing ? "Turn passed" : "You're wrong!" } <br />Next player, click here to begin your turn </div></div> : null 
        )

  }
}

export default ChangePlayerModal;
