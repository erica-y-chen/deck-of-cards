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
          .then(drawn => {
              // this.state.card.push(drawn)
              this.setState ({
                card: [...drawn.data.cards],
              })
              console.log(drawn.data.cards)}
          )
          .catch(err => {
              console.log(err);
          }) 
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  drawCard = () => {
    axios
          .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
          .then(res => {
              // this.state.card.push(drawn)
              let deck = this.state.card; 
              deck.push(res.data.cards[0])
              this.setState ({
                card: deck,
              })
              console.log(res.data.cards[0])}
          )
          .catch(err => {
              console.log(err);
          }) 
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Get cards: 
          {this.state.deckID}
        </header>

        <body>
          <button onClick = {this.drawCard}>draw card</button>
          {this.state.card.length>0 ? <div className="cards">{this.state.card.map(card =>
              <img className = "card" src={card.image} />
            )}</div> : null}
        </body>
      </div>
    );
  }
}

export default App;
