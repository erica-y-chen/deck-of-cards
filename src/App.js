import React, { Component } from "react";
import axios from 'axios';
import CardDeck from './components/CardDeck.js'
import logo from './logo.svg';
import './App.css';
import {Clover, Diamond, Spades, Hearts} from './components/CardDeckModern'
import ChangePlayerModal from "./components/ChangePlayerModal.js";

class App extends Component {
  state = {
    deckID: "",
    card: [],
    drawnCard: [],
    playerGuess: null,
    nextCardHigher: "", 
    correct: 0,
    points: 0,
    modern: true,
    previousCardVal: 0,
    result: '',
    canPass: false,
    player1Pts: 0,
    player2Pts: 0,
    remaining: 0,
    Player1: true,
    showModal: false,
  };

  componentDidMount() {
    let ID = ""
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        this.setState ({
          deckID: res.data.deck_id,
          remaining: res.data.remaining
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
        remaining: this.state.remaining-1, 
        card: deck,
        previousCardVal: deck.value,
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
          //     if (this.state.drawnCard.value === "ACE") {
          //       let faceCard = this.state.drawnCard; 
          //       faceCard.value === "1";
          //       this.setState({
          //         drawnCard: faceCard,
          //       })
          //       return "1"
          // }


              this.state.drawnCard.value > this.state.card[this.state.card.length-1].value ? 
                this.setState ({
                  nextCardHigher: true
                }) 
                : 
                this.setState ({
                  nextCardHigher: false
                }) 
              
                this.checkGuess();
            })
          .catch(err => {
              console.log(err);
          }) 
  }

  
  checkGuess = () => {

    if (this.state.nextCardHigher === this.state.playerGuess && this.state.correct < 3) {
          if(this.state.correct < 2) {
            this.setState({
              correct: this.state.correct + 1,
              message: "you're correct",
            })
          } else if (this.state.correct === 2) {
            this.setState({
              correct: this.state.correct + 1,
              message: "you're correct",
              canPass: true
            })
          }
      }else ( this.state.Player1 ? 
      this.setState({ 
        message: "you're wrong",
        player1Pts: this.state.player1Pts + this.state.card.length-1,
        drawnCard: [],
        card: [],
        correct: 0, 
        Player1: !this.state.Player1, 
      }) :       
      
      this.setState({ 
        message: "you're wrong",
        player2Pts: this.state.player2Pts + this.state.card.length-1,
        drawnCard: [],
        card: [],
        correct: 0, 
        Player1: !this.state.Player1, 
        showModal: true,
      })
    )
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

  passPlayer = () => {
    console.log('passing')
    this.setState({
      drawnCard: [],
      card: [],
      correct: 0, 
      Player1: !this.state.Player1, 
      showModal: true,
    })
  }

  triggerModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          Get cards: 
          {this.state.deckID}
        </header> */}


        <img src={Clover[1]} />

        <ChangePlayerModal show={this.state.showModal} triggerModal = {this.triggerModal}/>
        <body>
          <div >Remaining Cards: {this.state.remaining}</div>
          {this.state.Player1 ? <div>Player 1</div> : <div>Player 2</div>}
          <div>Player 1 points: {this.state.player1Pts}</div>
          <div>Player 2 points: {this.state.player2Pts}</div>
          drawn card: <img src={this.state.drawnCard.image} />
          Guess: 
          <button onClick={this.toggleTrue} className = {this.state.playerGuess ? "selected" : "unselected"} >High</button>
          <button onClick={this.toggleFalse} className = {!this.state.playerGuess ? "selected" : "unselected"}>Low</button>
          <button onClick = {this.drawCard}>draw card</button>
          {this.state.card.length>1 ? <div className="cards"> 
            {this.state.card.map(card =>
              <><img className = "card" src={card.image} />
              </>
            )} 
            {this.state.message}</div> : null}
            <div>Correct: {this.state.correct}</div>
            {this.state.canPass ? <button onClick={this.passPlayer}>Pass</button> : null}
        </body>
      </div>
    );
  }
}

export default App;
