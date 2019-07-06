import React from 'react';
import CardDeck from './components/CardDeck.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Get cards: 
        <CardDeck />
      </header>
    </div>
  );
}

export default App;
