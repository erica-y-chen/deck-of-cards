import React, {Component} from "react";
import { Route } from 'react-router-dom';

import './App.css';

import Game from './pages/HiLowGame'
import Onboarding from './pages/Onboarding'
import MakeProfile from './pages/MakeProfile.js'

class App extends Component {

  makeAvatar = () => { 
    console.log('hello')
  }

  render () {
    return (
      <div className = "App">
        <Route exact path="/" component = {Onboarding} />
        <Route path = "/profile" render={(routeProps) => ( <MakeProfile {...routeProps} makeAvatar= {this.makeAvatar} />  )} />
        <Route path="/high-low" component = {Game} />

        
    
        <div className="footer">Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY</div>
      </div>
    )
  }

}

export default App;
