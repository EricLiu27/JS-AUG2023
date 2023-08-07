import logo from './logo.svg';
import './App.css';
import FetchPokemon from './components/FetchPokemon';
import FetchPokemonOnLoad from './components/FetchPokemonOnLoad';

function App() {
  return (
    <div className="App">
      {/* <FetchPokemon /> */}
      <FetchPokemonOnLoad />
    </div>
  );
}

export default App;
