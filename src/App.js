import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getPokemon, getAllPokemon } from './Services/pokeService'
import { makeStyles } from '@material-ui/core/styles'
import PokemonList from '../src/Pages/pokemonList'
import './App.css';

const useStyles = makeStyles(theme => ({
  /*style appBar*/
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#e15b4d',
    boxShadow: '1px 2px 5px rgb(0 0 0 / 20%)'
  },
}));

function App() {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState([])
  const [loading, isLoading] = useState(true)
  const apiURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL)
      await loadPokemon(response.results)
      isLoading(false)
      console.log(response)
    }
    fetchData()
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonGet = await getPokemon(pokemon)
      return pokemonGet
    }))
    setPokemonData(_pokemonData)
  }

  return (
    <>
    <Router>
      <div className='gridContainer'>
        {loading ? <h1>Loading...</h1> : (
          <Route exact path='/'>
            {pokemonData.map((pokemon, i) => {
              return <PokemonList key={i} pokemon={pokemon} />
            })}
          </Route>
        )}
      </div>
    
    </Router>
    </>
  );
}

export default App;
