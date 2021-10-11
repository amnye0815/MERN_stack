import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

function App() {
  const [newBoxArray, setNewBoxArray] = useState([]);

  return (
    <div className="App">
      <h1 className="header"><u>Box Generator</u></h1>
      <BoxForm newBoxArray={newBoxArray} setNewBoxArray={setNewBoxArray}/>
      <BoxDisplay newBoxArray={newBoxArray}/>
    </div>
  );
}

export default App;