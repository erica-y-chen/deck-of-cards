import React, {Component} from "react";
import { Route } from 'react-router-dom';

import './App.css';

import Game from './pages/HiLowGame'
import Onboarding from './pages/Onboarding'
import MakeProfile from './pages/MakeProfile1.js'
import Footer from './components/Footer'

//avatars 
import profile1 from './images/profiles/boy.svg'
import profile2 from './images/profiles/boy2.svg'
import profile3 from './images/profiles/girl.svg'
import profile4 from './images/profiles/girl2.svg'


class App extends Component {
  state = {
    avatars: [profile1, profile2, profile3, profile4],
  }

  //function that takes in the user information set in the profile page
  player1Avatar = (key, key2, name, name2) => { 
    localStorage.setItem('avatar1', JSON.stringify(this.state.avatars[key]))
    localStorage.setItem('name1', name)
    localStorage.setItem('avatar2', JSON.stringify(this.state.avatars[key2]))
    localStorage.setItem('name2', name2)
  }


  render () {
    return (
      <div className = "App">
        <Route exact path="/" component = {Onboarding} />
        <Route path = "/profile" render={(routeProps) => ( <MakeProfile {...routeProps} makeAvatar= {this.player1Avatar} />  )} />
        <Route path="/high-low" render={(routeProps) => (<Game {...routeProps}/>  )} />
        <Route path="/" component={Footer} />
      </div>
    )
  }

}

export default App;
