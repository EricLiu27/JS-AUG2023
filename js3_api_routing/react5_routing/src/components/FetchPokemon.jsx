import React, { useState } from 'react'
import PokemonDisplay from './PokemonDisplay';
import axios from 'axios';

// To store the api response (that will keep changing) : state -- import, create

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokemonWithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                setPokemon(jsonResponse);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1> Fetch Pokemon</h1>
            <button onClick={fetchPokemonWithThen}>Fetch Pokemon with .then</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Click on a button to fetch a pokemon</h1>
            }
        </div>
    )
}

export default FetchPokemon