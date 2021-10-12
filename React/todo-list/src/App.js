import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App () {
  return(
      <div className="App">
        <Header />
        <Form />
        <Display />
      </div>
  );
}

export default App;