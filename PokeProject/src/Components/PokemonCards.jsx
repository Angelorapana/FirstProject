import axios from "axios";
import { useState, useEffect } from "react";
 
function PokemonCards() {
 const [pokemon, setPokemon] = useState([])
 const  apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
 useEffect(() => {
  axios.get(apiUrl)
    .then(res => 
      setPokemon(res.data.results))
    .catch
    (err => console.log(err)) 
  }, [])

 return (
  <div>
    <h1>Pokemon Cards</h1>
    <ul>
      {pokemon.map((poke, index) => (
        <li key={index}>{poke.name}</li>
      ))}
    </ul>
  </div>
 )
}

export default PokemonCards

