import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import ChangePlayerModal from "../components/ChangePlayerModal.js";
import EndGameModal from '../components/EndGameModal.js'
import './onboarding.css'
import './game.css'

//AOS Library
import AOS from 'aos'
import 'aos/dist/aos.css';

//images 
import Logo from '../images/high-low-logo.svg'
import {modernDeck} from '../components/CardDeckModern'

class HiLowGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "",
      cards: [],
      drawnCard: null,
      playerGuess: null, 
      correct: 0,
      modern: false,
      player1Pts: 10,
      player2Pts: 0,
      remaining: 52,
      Player1: true,
      showModal: false,
      endGame: false,
      Passing: false,
    };
  }

  componentDidMount() {
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        this.setState ({
          deckID: res.data.deck_id,
        })
        axios
        .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
        .then(res => {

            //checking for special values
            let fetchedCard = res.data.cards[0].value;
            if(fetchedCard === "ACE") {
              fetchedCard = 1; 
            } else if (fetchedCard === "QUEEN") {
              fetchedCard = 12;
            } else if (fetchedCard === "KING") {
              fetchedCard = 13;
            } else if (fetchedCard === "JACK") {
             fetchedCard = 11;
            }

            this.setState ({
              drawnCard: res.data.cards[0],
            })
          })
        .catch(err => {
            console.log(err);
        }) 
      })
      .catch(err => {
        console.log(err);
      });
  }


  //allows the user to draw a new card from the deck
  drawCard = () => {
    let deck=this.state.cards;
    deck.push(this.state.drawnCard)
    this.setState ({
      remaining: this.state.remaining - 1, 
      cards: deck,
    })

    if (this.state.remaining) {
      axios
            .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
            .then(res => {
                let drawnCardVal = this.cardValToInt(res.data.cards[0].value)
                let cardDrawnBeforeVal = this.cardValToInt(deck[deck.length-1].value)

                this.setState ({
                  drawnCard: res.data.cards[0],
                })

                this.checkGuess(drawnCardVal, cardDrawnBeforeVal)
              })
            .catch(err => {
                console.log(err);
            }) 
      } else {
        this.setState ({
          endGame: true,
        })
      }
  }

  //convert all card values from strings to integers
  cardValToInt = (number) => { 
    if(number === "ACE") {
      number = 1; 
    } else if (number === "QUEEN") {
      number = 12;
    } else if (number === "KING") {
      number = 13;
    } else if (number === "JACK") {
      number = 11;
    } else {
      number = parseInt(number, 10);
    }
    return number;
  }

  //draws the very first deck in the beginning of the game and when the players switch and a new person is playing 
  drawingFirstCard = () => { 
    this.setState({
      remaining: this.state.remaining - 1, 
    })
    axios
          .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
          .then(res => {
              
              //checking for special values
              let firstCardVal = res.data.cards[0].value;

              if(firstCardVal === "ACE") {
                firstCardVal = 1; 
              } else if (firstCardVal === "QUEEN") {
                firstCardVal = 12;
              } else if (firstCardVal === "KING") {
                firstCardVal = 13;
              } else if (firstCardVal === "JACK") {
                firstCardVal = 11;
              }

              this.setState ({
                drawnCard: res.data.cards[0],
              })

            })
          .catch(err => {
              console.log(err);
          }) 
  }

  //checks to see if the user guess is right 
  checkGuess = (drawnCardVal, cardDrawnBeforeVal) => { 
    const { player1Pts, playerGuess, cards, correct, Player1, player2Pts } = this.state;
    const comparison = drawnCardVal === cardDrawnBeforeVal ? playerGuess : drawnCardVal > cardDrawnBeforeVal //checks to see if the user guess is right 

    //compares user guess with the actual result if true, adds a card to the user's deck, if false, it triggers a player switch
    if(comparison === playerGuess ) {
      this.setState({
        correct: correct + 1
      })
    } else (Player1 ? 
      this.setState({
        player1Pts: player1Pts + cards.length,
        Player1: !Player1,
        showModal: true,
      }):       
      this.setState({ 
        player2Pts: player2Pts + cards.length,
         Player1: !Player1, 
         showModal: true,
      })
      )
  }

  //sets state to true if user guesses the next card will be high
  guessHigh = () => { 
    this.setState ({
      playerGuess: true,
    })
  }

  //sets the state to false if the user guesses the next card will be low
  guessLow = () => { 
    this.setState ({
      playerGuess: false,
    })
  }

  //handling when the player chooses to pass his turn to the next player after 3 consecutive correct guesses
  passPlayer = () => {
    this.setState({
      Passing: true,
      Player1: !this.state.Player1, 
      showModal: true,
      playerGuess: null,
    })
  }

  //sets the modal to pop up when the turn goes over to the next player 
  triggerModal = () => {
    this.setState({
      showModal: !this.state.showModal,
      drawnCard: null,
      cards: [],
      correct: 0, 
      playerGuess: null,
    })
    this.drawingFirstCard();
  }

  //toggles the style of cards between classic and modern
  toggleModern = () => {
    this.setState({
      modern: !this.state.modern,
    })
  }


  render () {
    const { drawnCard } = this.state;

    AOS.init();

    return (
      <div>
        <ChangePlayerModal passing = {this.state.Passing} correct = {this.state.correct} show={this.state.showModal} triggerModal = {this.triggerModal}/>
        {this.state.remaining === 0 ? <EndGameModal show={true} player1={this.props.player1} player2={this.props.player2} player1Pts={this.state.player1Pts} player2Pts={this.state.player2Pts}/> : null }

        <div className="onboarding-header">
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} alt = "high-low game logo"/>
                <div className="game-title">high/low</div>
            </div>
            <div className = "header-buttons">
              <Link to="/"><div className= "how-to-play">How to Play</div></Link>
              <div className= "theme-button" onClick = {this.toggleModern}>Change Card Theme ({this.state.modern ? "Classic" : "Modern"})</div>
            </div>
        </div>

        {/* provides general information for the team--> player info, points, and remaining cards in the game to draw */}
        <div className ="game-info">
          <div className={this.state.Player1 ? "player-info-selected" : "player-info"}>
            <div className="player"><img src={this.props.player1.avatar} className="game-avatar" alt="player 1 avatar"/>Player 1: {this.props.player1.name}</div>
            <div className="player-points">Points: {this.state.player1Pts}</div>
          </div>

          <div className="remaining-cards">
            Remaining Cards: 
            <div className="remaining-cards-num">{this.state.remaining}</div>
          </div>

          <div className={!this.state.Player1 ? "player-info-selected" : "player-info"}>
            <div className="player"><img src={this.props.player2.avatar} className="game-avatar" alt = "player 2 avatar"/>Player 2: {this.props.player2.name}</div>
            <div className="player-points">Points: {this.state.player2Pts}</div>
          </div>

        </div>

        <div className="game-content">
          
          {/* displays the deck of cards and the module for players to make a guess */}
          <div className="left-content">

            <div className = "guess-modal">
              <div className="guess-header">Guess for next card (high/low): </div>
              <div className="high-low">
                <div onClick={this.guessHigh} className = {this.state.playerGuess ? "selected" : "unselected"} >High</div>
                <div onClick={this.guessLow} className = {this.state.playerGuess===false ? "selected" : "unselected"}>Low</div> 
              </div>
            </div>
  
            <div className="card-deck">
              <div className="drawn-cards">
                <div className="draw-card-button">
                  {this.state.playerGuess !== null ? <button className="draw-card" onClick = {this.drawCard}>draw card</button> : null}
                  <img className="card-back"  alt="back of card deck pattern" src={modernDeck.CLUBS[0]} onClick={this.state.playerGuess !== null ? this.drawCard : null}/>
                </div>
                {drawnCard && 
                  <img className="card" alt = {"playing card: " + drawnCard.suit + drawnCard.value} src={this.state.modern ? modernDeck[drawnCard.suit][this.cardValToInt(drawnCard.value)] : drawnCard.image} />
                }
                </div>
              </div>
            </div>
            
            {/* displays the number of correct guesses for this turn and all of the drawn cards for the turn */}
            <div className="drawn-cards-display">
              <div className="drawn-cards-header">
                <div className = "num-correct">Correct: {this.state.correct}</div>
                {this.state.correct >= 3 ? <button className ="pass-button" onClick={this.passPlayer}>Pass Turn</button> : null} 
              </div>
              <div className="cards"> 
                {this.state.cards.map(card => {
                  return (<>
                  {this.state.modern && this.state.cards ? <img className = {this.state.modern ? "card-deck-modern" : "card-deck"} alt = {"playing card: " + card.suit + card.value} src={modernDeck[card.suit][this.cardValToInt(card.value)]} />
                  : <img className = "card-deck" src={card.image} alt = "playing card"/> }
                  </>)
                }
                )}
              </div> 
            </div>
            
 

        </div>
      </div>
    );
  }
}

export default HiLowGame;
