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
    avatars: [profile1, profile4, profile2, profile3],
  }

  player1Avatar = (key, name) => { 
    console.log('hello' + key + name)
    let playerOne = this.state.player1;
    playerOne.avatar = this.state.avatars[key];
    playerOne.name = name; 
    
    this.setState({
      player1: playerOne,
    })
  }


  render () {
    return (
      <div className = "App">
        <Route exact path="/" component = {Onboarding} />
        <Route path = "/profile" render={(routeProps) => ( <MakeProfile {...routeProps} makeAvatar= {this.player1Avatar} />  )} />
        <Route path="/high-low" render={(routeProps) => (<Game {...routeProps} player1= {this.state.player1} />  )} />

        
    
        <div className="footer">Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY</div>
      </div>
    )
  }

}

export default App;
