import React, { useState } from 'react'
import PokemonDisplay from './PokemonDisplay';
import axios from 'axios';


const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokemonWithAxios = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then(response=>{
                setPokemon(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h1>AxiosPokemon</h1>
            <button onClick={fetchPokemonWithAxios}>Fetch Pokemon with Axios</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Click on a button to fetch a pokemon</h1>
            }
        </div>
    )
}

export default AxiosPokemon