import React, { Component } from "react";
import axios from 'axios';


// this is the container for ALL of '/dashboard'
class CardDeck extends Component {
  state = {
    cardDeck: [],
  };

  componentDidMount() {
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res =>
        console.log(res),
        // this.setState({
        //   cardDeck: res.data,
        // })
      )
      .catch(err => {
        console.log(err.response.data);
      });
  }


    render() {
        return (
        <div>hello</div>
        )
  }
}

export default CardDeck;
