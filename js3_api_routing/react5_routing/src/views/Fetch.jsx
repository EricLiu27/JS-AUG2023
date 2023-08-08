import React from 'react'
import FetchPokemon from '../components/FetchPokemon'
import { useParams } from 'react-router-dom'

const Fetch = () => {
    const { name } = useParams()
    return (
        <div>
            <h1>{name}</h1>
            <FetchPokemon />
        </div>
    )
}

export default Fetch