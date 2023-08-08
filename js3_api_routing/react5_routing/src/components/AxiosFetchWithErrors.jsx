import React, { useState } from 'react'
import PokemonDisplay from './PokemonDisplay';
import axios from 'axios';


const AxiosFetchWithErrors = () => {
    const [pokemon, setPokemon] = useState();

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
            <h1> AxiosFetchWithErrors</h1>
            <button onClick={fetchErrorWithAxiosAsync}>Fetch Error with Axios & Async</button>
            {
                pokemon ?
                    <PokemonDisplay pokemon={pokemon} /> :
                    <h1> Click on a button to fetch a pokemon</h1>
            }
        </div>
    )
}

export default AxiosFetchWithErrors