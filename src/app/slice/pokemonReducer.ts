import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PokemonState = {
  pokemons: any[],
  searchedResult: any[],
  page: number,
  searchText: string
}

const initialState: PokemonState = {pokemons: [], searchedResult: [], page: -1, searchText: ""};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state: PokemonState, action: PayloadAction<any[]>) => {
        const newState = {...state, pokemons: [...state.pokemons, ...action.payload], searchedResult: [...state.searchedResult, ...action.payload]};
        return newState;
    },
    setSearchedResult: (state, action) => {
        state = {...state, searchedResult: action.payload};
        return state;
    },
    addPage: (state: PokemonState, action: PayloadAction<number>) => {
      const newState = {...state, page: action.payload};
      return newState;
    },
    setSearchText: (state: PokemonState, action: PayloadAction<string>) => {
      return {...state, searchText: action.payload}
    }
  }
})

export const { setPokemon, setSearchedResult, addPage, setSearchText } = pokemonSlice.actions;

export default pokemonSlice.reducer