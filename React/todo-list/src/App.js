import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App () {
  const [newTask, setNewTask] = useState([]);

  return(
      <div className="App">
        <Header />
        <Form newTask={newTask} setNewTask={setNewTask} />
        <Display newTask={newTask} />
      </div>
  );
}

export default App;