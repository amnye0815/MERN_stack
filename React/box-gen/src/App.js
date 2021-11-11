import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

function App() {

  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <h1><u>Box Generator</u></h1>
      <BoxForm boxColorArray = { boxColorArray } setBoxColorArray = { setBoxColorArray } />
      <BoxDisplay boxColorArray = { boxColorArray } setBoxColorArray = { setBoxColorArray } />
    </div>
  );
}

export default App;