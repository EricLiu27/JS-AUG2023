import React, { useState } from 'react'
import PokemonDisplay from './PokemonDisplay';
import axios from 'axios';


const AsyncFetchPokemon = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokemonWithAwait = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json();
        setPokemon(jsonResponse);
    }

    return (
        <div>
            <h1>AsyncFetchPokemon</h1>
            <button onClick={fetchPokemonWithAwait}>Fetch Pokemon with async/await</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Click on a button to fetch a pokemon</h1>
            }
        </div>
    )
}

export default AsyncFetchPokemon