import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PokemonState = {
  pokemons: any[],
  searchedResult: any[]
}

const initialState: PokemonState = {pokemons: [], searchedResult: []};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state: PokemonState, action: PayloadAction<any[]>) => {
        const newState = {...state, pokemons: action.payload, searchedResult: [...state.searchedResult, ...action.payload]};
        return newState;
    },
    setSearchedResult: (state, action) => {
        state = {...state, searchedResult: action.payload};
        return state;
    }
  }
})

export const { setPokemon, setSearchedResult } = pokemonSlice.actions;

export default pokemonSlice.reducer