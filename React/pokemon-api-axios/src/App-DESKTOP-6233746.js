import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then (response => setPokemonList(response.data.results))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) =>
          <li key={index}>{pokemon.name}</li>
        )}
      </ul>
    </div>
  );
}


export default App;