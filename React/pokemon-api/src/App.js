
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then (response => response.json())
    .then (response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      <ul>
        {pokemon.length > 0 && pokemon.map((pokemon, index) =>{
          return(<li key={index}>{pokemon.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;