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
import profile1 from '../images/profiles/boy.svg'
import profile2 from '../images/profiles/girl.svg'

class HiLowGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "",
      card: [],
      drawnCard: [],
      playerGuess: null,
      nextCardHigher: null, 
      correct: 0,
      points: 0,
      modern: false,
      result: '',
      canPass: false,
      player1Pts: 0,
      player2Pts: 10,
      remaining: 0,
      Player1: true,
      showModal: false,
      endGame: false,
    };
  }

  componentDidMount() {
    let ID = ""
      axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        this.setState ({
          deckID: res.data.deck_id,
          remaining: res.data.remaining
        })
        axios
        .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
        .then(res => {

            //checking for special values
            if(res.data.cards[0].value === "ACE") {
              res.data.cards[0].value = 1; 
            } else if (res.data.cards[0].value === "QUEEN") {
              res.data.cards[0].value = 12;
            } else if (res.data.cards[0].value === "KING") {
              res.data.cards[0].value = 13;
            } else if (res.data.cards[0].value === "JACK") {
              res.data.cards[0].value = 11;
            }

            this.setState ({
              drawnCard: res.data.cards[0],
            })
            console.log(res.data.cards[0])
          })
        .catch(err => {
            console.log(err);
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
    console.log(this.state.card)
    let deck=this.state.card;
    deck.push(this.state.drawnCard)
                 this.setState ({
                    remaining: this.state.remaining-1, 
                    card: deck,
                  })
    if (this.state.remaining > 0) {
      axios
            .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
            .then(res => {

                //checking for special values
                if(res.data.cards[0].value === "ACE") {
                  res.data.cards[0].value = 1; 
                } else if (res.data.cards[0].value === "QUEEN") {
                  res.data.cards[0].value = 12;
                } else if (res.data.cards[0].value === "KING") {
                  res.data.cards[0].value = 13;
                } else if (res.data.cards[0].value === "JACK") {
                  res.data.cards[0].value = 11;
                }
                
                this.setState ({
                  drawnCard: res.data.cards[0],
                })
                console.log(res.data.cards[0].value)
                
                console.log(this.state.card[this.state.card.length-1].value)

                res.data.cards[0].value > this.state.card[this.state.card.length-1].value ? 
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
      } else {
        this.setState ({
          endGame: true,
        })
      }
  }


  drawingCards = () => {
    this.setState({
      remaining: this.state.remaining-1, 
    })
    axios
          .get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1` )
          .then(res => {
              
              //checking for special values
              if(res.data.cards[0].value === "ACE") {
                res.data.cards[0].value = 1; 
              } else if (res.data.cards[0].value === "QUEEN") {
                res.data.cards[0].value = 12;
              } else if (res.data.cards[0].value === "KING") {
                res.data.cards[0].value = 13;
              } else if (res.data.cards[0].value === "JACK") {
                res.data.cards[0].value = 11;
              }

              this.setState ({
                drawnCard: res.data.cards[0],
              })
              console.log(res.data.cards[0].value)
              
              // res.data.cards[0].value > this.state.card[this.state.card.length-1].value ? 
              //   this.setState ({
              //     nextCardHigher: true
              //   }) 
              //   : 
              //   this.setState ({
              //     nextCardHigher: false
              //   }) 
              
              //   this.checkGuess();
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
            })
          } else if (this.state.correct === 2) {
            this.setState({
              correct: this.state.correct + 1,
              canPass: true
            })
          }
      }else ( this.state.Player1 ? 
      this.setState({ 
        player1Pts: this.state.player1Pts + this.state.card.length,
        Player1: !this.state.Player1, 
        showModal: true,
      }) :       
      
      this.setState({ 
        player2Pts: this.state.player2Pts + this.state.card.length,
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
      drawnCard: [],
      card: [],
      correct: 0, 
    })
    this.drawingCards();
  }

  toggleModern = () => {
    this.setState({
      modern: !this.state.modern,
    })
  }

  resetGame = () => {
    this.setState({
      endGame: false,
    })
    window.location.reload();
  }

  render () {
    AOS.init();
    
    return (
      <div>
        <ChangePlayerModal show={this.state.showModal} triggerModal = {this.triggerModal}/>
        <EndGameModal show={this.state.endGame} player1={this.props.player1} player2={this.props.player2} player1Pts={this.state.player1Pts} player2Pts={this.state.player2Pts} resetGame = {this.resetGame}/>

        <div className="onboarding-header">
            <div className = "high-low-logo">
                <img className="logo" src ={Logo} />
                <div className="game-title">high/low</div>
            </div>
            <div className = "header-buttons">
              <Link to="/"><div className= "how-to-play">How to Play</div></Link>
              <div className= "theme-button" onClick = {this.toggleModern}>Change Card Theme ({this.state.modern ? "Modern" : "Classic"})</div>
            </div>
        </div>

        <div className ="game-info">
          <div className={this.state.Player1 ? "player-info-selected" : "player-info"}>
            <div className="player"><img src={this.props.player1.avatar} className="game-avatar" />Player 1: {this.props.player1.name}</div>
            <div className="player-points">Points: {this.state.player1Pts}</div>
          </div>

          <div className="remaining-cards">
            Remaining Cards: 
            <div className="remaining-cards-num">{this.state.remaining}</div>
          </div>

          <div className={!this.state.Player1 ? "player-info-selected" : "player-info"}>
            <div className="player"><img src={this.props.player2.avatar} className="game-avatar" />Player 2: {this.props.player2.name}</div>
            <div className="player-points">Points: {this.state.player2Pts}</div>
          </div>

        </div>

        <body className="game-content">
          <div className="left-content">
            <div className="card-deck">
              <div className="drawn-cards">
                <div className="draw-card-button">
                  {this.state.playerGuess !== null ? <button className="draw-card" onClick = {this.drawCard}>draw card</button> : null}
                  <img className="card-back" src={modernDeck.CLUBS[0]} onClick={this.state.playerGuess !== null ? this.drawCard : null}/>
                </div>
                <img className="card" src={this.state.modern ? modernDeck[this.state.drawnCard.suit][this.state.drawnCard.value] : this.state.drawnCard.image} />
              </div>
          </div>
          <div className = "guess-modal">
              <div className="guess-header">Guess for next card (high/low): </div>
              <div className="high-low">
                <div onClick={this.toggleTrue} className = {this.state.playerGuess ? "selected" : "unselected"} >High</div>
                <div onClick={this.toggleFalse} className = {this.state.playerGuess===false? "selected" : "unselected"}>Low</div> 
              </div>
            </div>
            </div>
            
            <div className="drawn-cards-display">
              <div className="drawn-cards-header">
                <div className = "num-correct">Correct: {this.state.correct}</div>
                {this.state.canPass ? <button className ="pass-button" onClick={this.passPlayer}>Pass Turn</button> : null} 
              </div>
              <div className="cards"> 
                {this.state.card.map(card => <>
                  {this.state.modern && this.state.card ? <img className = {this.state.modern ? "card-deck-modern" : "card-deck"} src={modernDeck[card.suit][card.value]} />
                  : <img className = "card-deck" src={card.image} /> }
                  
                </>
                )}
              </div> 
            </div>
            


        </body>
      </div>
    );
  }
}

export default HiLowGame;
