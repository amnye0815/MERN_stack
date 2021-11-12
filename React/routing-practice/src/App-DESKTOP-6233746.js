import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import WordOrNumber from './components/WordOrNumber';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/home" />
        <WordOrNumber path="/:word" />
        <WordOrNumber path="/:word/:color/:bgColor" />
      </Router>
    </div>
  );
}

export default App;