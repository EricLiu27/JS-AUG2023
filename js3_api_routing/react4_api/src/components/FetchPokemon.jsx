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

    const fetchPokemonWithAwait = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json();
        setPokemon(jsonResponse);
    }

    const fetchPokemonWithAxios = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then(response=>{
                setPokemon(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const fetchErrorWithAxiosAsync = async()=>{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pich`);
            setPokemon(response.data);
        }catch(err){
            console.log("ERROR, in catch")
            console.log(err);
            alert("Invalid pokemon")
            setPokemon();
        }
    }



    return (
        <div>
            <h1> Fetch Pokemon</h1>
            <button onClick={fetchPokemonWithThen}>Fetch Pokemon with .then</button>
            <button onClick={fetchPokemonWithAwait}>Fetch Pokemon with async/await</button>
            <button onClick={fetchPokemonWithAxios}>Fetch Pokemon with Axios</button>
            <button onClick={fetchErrorWithAxiosAsync}>Fetch Error with Axios & Async</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Click on a button to fetch a pokemon</h1>
            }

        </div>
    )
}

export default FetchPokemon