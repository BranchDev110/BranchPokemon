import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { setPokemon } from './app/slice/pokemonReducer';

function App() {
  const pokemons = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const { results } = await response.json();
      const detailResponse = await Promise.all(results.map(async ({url}: {url: string}) => await fetch(url)));
      const pokemon = await Promise.all(detailResponse.map(item => item.json()));
      dispatch(setPokemon(pokemon));
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      {
        pokemons.map((pokemon: any) => <div>{pokemon.name}</div>)
      }
    </div>
  );
}

export default App;
