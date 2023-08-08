import './App.css';
import FetchPokemon from './components/FetchPokemon';
import AsyncFetchPokemon from './components/AsyncFetchPokemon';
import AxiosFetchWithErrors from './components/AxiosFetchWithErrors';
import AxiosPokemon from './components/AxiosPokemon';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Fetch from './views/Fetch';
import Landing from './views/Landing';
import FetchAsync from './views/FetchAsync';
import Axios from './views/Axios';
import AxiosErrors from './views/AxiosErrors';


function App() {

    return (
        <div className="App">

            {/* Navbar */}
            <nav className='rowStyle'>
                <NavBar />
            </nav>

            <Routes>
                <Route path='/' element={<Landing />} />

                <Route path='/fetch' element={<Fetch />} />
                <Route path='/fetch/:name' element={<Fetch />} />


                <Route path='/fetchasync' element={<FetchAsync />} />
                <Route path='/axios' element={<Axios />} />
                <Route path='/axioserror' element={<AxiosErrors />} />
            </Routes>

            {/* Main Boxes */}
            {/* <div className='rowStyle'>
                <div className='boxStyle'>
                    <FetchPokemon />
                </div>
                <div className='boxStyle'>
                    <AsyncFetchPokemon />
                </div>
                <div className='boxStyle'>
                    <AxiosPokemon />
                </div>
                <div className='boxStyle'>
                    <AxiosFetchWithErrors />
                </div>
            </div> */}
            {/* <FetchPokemonOnLoad /> */}
        </div>
    );
}

export default App;
