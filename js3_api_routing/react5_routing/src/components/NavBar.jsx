import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <ul className='ulBox'>
            <li><Link to="/fetch">Fetch Normal</Link></li>
            <li><Link to="/fetchasync">Fetch With Async</Link></li>
            <li><Link to="/axios">Axios Normal</Link></li>
            <li><Link to="/axioserror">Axios With Errors</Link></li>
        </ul>
    )
}

export default NavBar



