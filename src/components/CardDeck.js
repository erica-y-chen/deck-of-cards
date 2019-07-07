import React, { Component } from "react";
import axios from 'axios';


// this is the container for ALL of '/dashboard'
class CardDeck extends Component {
constructor(props){
    super(props)
    this.state = {

    };
}


    render() {
        return ( <div className = "body">
            <div>Deck ID: </div>
            <div>{this.props.deckID.cards[0].image}</div>
        </div>
        )
  }
}

export default CardDeck;
