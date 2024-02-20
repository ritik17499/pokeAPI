import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import pokeColor from '../Pages/pokeColor'
import '../Assets/scss/style.scss'

const useStyles = makeStyles(theme => ({
  /*style grid*/
  grid: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function PokemonList({ pokemon }) {
  const classes = useStyles();

  return (
    <>
    <div className='gridContainer'>
      <div className={classes.grid}>
        <div className='pokeType' style={{ backgroundColor: pokeColor[pokemon.name] }}>

          <img className='pokeImage' src={pokemon.sprites.front_default} alt='pokemon' />

          <Grid container>
            <Grid item xs={6}>
              <div className='pokeName'>
                {pokemon.name}
              </div>

            </Grid>
            <Grid item xs={6}>
              <div className='pokeOwned'>
                <div># <span>{pokemon.order}</span></div>
              </div>
            </Grid>
          </Grid>

          <div className='pokeTypes'>
            {
              pokemon.types.map((type, i) => {
                return (
                  <div className='pokeSkill' key={i}>
                    {type.type.name}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PokemonList