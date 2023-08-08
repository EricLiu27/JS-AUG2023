import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonDisplay from './PokemonDisplay'

// API call: state variable to store the changing value

const FetchPokemonOnLoad = () => {
    const [pokemon, setPokemon] = useState()

    const [id, setId] = useState(1)

    useEffect(() => {
        console.log("triggered useEffect");
        // run the API call to get the pokemon details
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response=>setPokemon(response.data))
            .catch(err=>console.log(err))

    },[id]) // MAKE SURE YOU HAVE SECOND ARGUMENT, AND NOT USING POKEMON IN THIS ARGUMENT as you updated that in the useEffect


    const randomNumberGenerator = ()=>{
        const randId = Math.floor(Math.random()*1200);
        setId(randId);
    }

    return (
        <div>
            <button onClick={randomNumberGenerator}> Generate a random pokemon</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Loading...</h1>
            }

        </div>
    )
}

export default FetchPokemonOnLoad