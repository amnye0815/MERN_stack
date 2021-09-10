import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  // useEffect(()=>{
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
  //     .then((res)=>{
  //       return res.json();
  //     })
  //     .then((res)=>{
  //       setPokemon(res.results);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  // }, []);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
      .then((res)=>{
        console.log(res);
        setPokemon(res.data.results);
      })
      .catch((err)=>console.log(err))
  }, []);
  
  return (
    <div className="App">
      <h3>Pokemon - <span className="practice">All 807 of them!</span></h3>
      <ol>
        {
          pokemon.map((pokemonByName, index)=>{
            return (<li key={index}>{pokemonByName.name}</li>)
          })
        }
      </ol>
    </div>
  );
}

export default App;