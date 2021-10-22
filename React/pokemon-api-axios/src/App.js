import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then (response => setPokemon(response.data.results))
  }, []);

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      <ul>
        {pokemon.map((pokemonName, index) =>{
          <li key={index}>{pokemonName.name}</li>
        })}
      </ul>
    </div>
  );
}


export default App;