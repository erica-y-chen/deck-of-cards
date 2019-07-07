import React, { Component } from "react";
import axios from 'axios';
import CardDeck from './components/CardDeck.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    deckID: "",
    card: {}
  };

  componentDidMount() {
    let ID = ""
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        this.setState ({
          deckID: res.data.deck_id
        })
        axios
          .get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1` )
          .then(drawn =>
              this.setState({
              card: drawn.data,
              }),
              // console.log(drawn.data)
          )
          .catch(err => {
              console.log(err);
          }) 
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Get cards: 
          {this.state.deckID}
          card:
          {this.state.card.cards ? this.state.card.cards.map(card => 
            <img src={card.image} />
          ) : null}
          

        </header>
      </div>
    );
  }
}

export default App;
