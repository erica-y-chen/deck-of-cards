import React, { Component } from "react";
import axios from 'axios';
import CardDeck from './components/CardDeck.js'
import logo from './logo.svg';
import './App.css';
import {Clover, Diamond, Spades, Hearts} from './components/CardDeckModern'

class App extends Component {
  state = {
    deckID: "",
    card: [],
    drawnCard: [],
    playerGuess: true, 
    correct: 0,
    points: 0,
    modern: true,
  };

  componentDidMount() {
    let ID = ""
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        this.setState ({
          deckID: res.data.deck_id
        })
        // axios
        //   .get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1` )
        //   .then(drawn => {
        //       // this.state.card.push(drawn)
        //       this.setState ({
        //         card: [...drawn.data.cards],
        //       })
        //       console.log(drawn.data.cards)}
        //   )
        //   .catch(err => {
        //       console.log(err);
        //   }) 
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  drawCard = () => {
    if(this.state.drawnCard) {
      let deck=this.state.card;
      deck.push(this.state.drawnCard)
      this.setState ({
        card: deck
      })
    }
    axios
          .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
          .then(res => {
              // this.state.card.push(drawn)
              // let deck = this.state.card; 
              // deck.push(res.data.cards[0])
              this.setState ({
                drawnCard: res.data.cards[0],
              })
              console.log(res.data.cards[0])
              
              console.log(this.state.card[this.state.card.length-1].value)
              this.state.drawnCard.value > this.state.card[this.state.card.length-1].value ? 
                console.log("higher") : console.log("lower")
              
            })
          .catch(err => {
              console.log(err);
          }) 
  }


  toggleTrue = () => {
    this.setState ({
      playerGuess: true,
    })
  }

  toggleFalse = () => {
    this.setState ({
      playerGuess: false,
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          Get cards: 
          {this.state.deckID}
        </header>


        <img src={Clover[1]} />


        <body>
          drawn card: <img src={this.state.drawnCard.image} />
          Guess: 
          <button onClick={this.toggleTrue} className = {this.state.playerGuess ? "selected" : "unselected"} >High</button>
          <button onClick={this.toggleFalse} className = {!this.state.playerGuess ? "selected" : "unselected"}>Low</button>
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
