import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Word from './components/Word';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Word path="/:word" />
        <Number path="/:int" />
      </Router>
    </div>
  );
}

export default App;