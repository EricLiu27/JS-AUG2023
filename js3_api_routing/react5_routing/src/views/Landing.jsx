import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Landing = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/fetch/${name}`)
    }

    return (
        <div>
            <div className='rowStyle'>

            <NavBar />
            </div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" id="name" placeholder='your name' value={name} onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Landing