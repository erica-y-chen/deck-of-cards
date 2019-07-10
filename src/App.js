import React from "react";
import { Route } from 'react-router-dom';

import './App.css';

import Game from './pages/HiLowGame'
import Onboarding from './pages/Onboarding'

function App() {

  return (
    <div className = "App">
      <Route path="/" component = {Onboarding} />
      <Route path="/high-low" component = {Game} />
  
      <div className="footer">Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY</div>
    </div>
  );

}

export default App;
