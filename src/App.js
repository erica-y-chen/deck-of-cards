import React, {Component} from "react";
import { Route } from 'react-router-dom';

import './App.css';

import Game from './pages/HiLowGame'
import Onboarding from './pages/Onboarding'
import MakeProfile from './pages/MakeProfile1.js'

//avatars 
import profile1 from './images/profiles/boy.svg'
import profile2 from './images/profiles/boy2.svg'
import profile3 from './images/profiles/girl.svg'
import profile4 from './images/profiles/girl2.svg'


class App extends Component {
  state = {
    player1: {avatar: {}, name: ''},
    player2: {avatar: {}, name: ''},
    avatars: [profile1, profile2, profile3, profile4],
  }

  //function that takes in the user information set in the profile page
  player1Avatar = (key, key2, name, name2) => { 
    let playerOne = this.state.player1;
    let playerTwo = this.state.player2;
    playerOne.avatar = this.state.avatars[key];
    playerOne.name = name; 
    playerTwo.avatar = this.state.avatars[key2];
    playerTwo.name = name2;
    
    this.setState({
      player1: playerOne,
      player2: playerTwo,
    })
  }


  render () {
    return (
      <div className = "App">
        <Route exact path="/" component = {Onboarding} />
        <Route path = "/profile" render={(routeProps) => ( <MakeProfile {...routeProps} makeAvatar= {this.player1Avatar} />  )} />
        <Route path="/high-low" render={(routeProps) => (<Game {...routeProps} player1= {this.state.player1} player2= {this.state.player2} />  )} />
      </div>
    )
  }

}

export default App;
