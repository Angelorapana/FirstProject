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
    <div className="container">
      <h1 className="text-center">Pokemon Cards</h1>
      <div className="row">
        {pokemon.map((poke, index) => (
          <div className="col-3" key={index}>
            <div className="card mb-4">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} className="card-img-top" alt={poke.name} />
              <div className="card-body">
                <h5 className="card-title">{poke.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default PokemonCards
