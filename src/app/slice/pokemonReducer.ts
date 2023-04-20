import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {pokemons: [], searchedResult: []},
  reducers: {
    setPokemon: (state, action) => {
        state = {...state, pokemons: action.payload, searchedResult: action.payload};
        return state;
    },
    setSearchedResult: (state, action) => {
        state = {...state, searchedResult: action.payload};
        return state;
    }
  }
})

export const { setPokemon, setSearchedResult } = pokemonSlice.actions;

export default pokemonSlice.reducer