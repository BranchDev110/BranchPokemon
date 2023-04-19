import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: <any>[],
  reducers: {
    setPokemon: (state, action) => {
        state = [...state, ...action.payload];
        return state;
    }
  }
})

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer